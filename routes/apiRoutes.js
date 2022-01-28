const express = require("express");
const {
  addPostController,
  fetchPosts,
  fetchPost,
} = require("../controllers/apiController");
const protect = require("../middlewares/checkAuth");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
let upload = multer({ storage, fileFilter });

router.post("/add_post", protect, upload.single("photo"), addPostController);
router.get("/fetch_posts", fetchPosts);
router.post("/fetch_post", fetchPost);

module.exports = router;
