const express = require("express");
const {
  addPostController,
  fetchPosts,
  fetchPost,
} = require("../controllers/apiController");
const protect = require("../middlewares/checkAuth");
const router = express.Router();
const { multerUploads, dataUri } = require("../middlewares/multer");
const { uploader, cloudinaryConfig } = require("../config/cloudinaryConfig");
const checkAuth = require("../middlewares/checkAuth");

router.post("/add_post", multerUploads, protect, addPostController);
router.get("/fetch_posts", fetchPosts);
router.post("/fetch_post", fetchPost);

router.use("*", cloudinaryConfig);

router.post("/upload", checkAuth, multerUploads, (req, res) => {
  console.log("req.file :", req.file);
  console.log(req.body.image.originalname);
  const { id } = req.body;
  console.log(id);
  if (req.file) {
    const file = dataUri(req).content;
    return uploader
      .upload(file)
      .then((result) => {
        const image = result.url;
        return res.status(200).json({
          message: "Your image has been uploded successfully to cloudinary",
          data: {
            image,
          },
        });
      })
      .catch((err) =>
        res.status(400).json({
          messge: "someting went wrong while processing your request",
          data: {
            err,
          },
        })
      );
  }
});

module.exports = router;
