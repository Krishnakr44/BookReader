const multer = require("multer");
const path = require("path");
const storage = multer.memoryStorage();
exports.multerUploads = multer({ storage }).single("image");
const DatauriParser = require("datauri/parser");
exports.dataUri = (req) => {
  const parser = new DatauriParser();
  try {
    return parser.format(path.extname(req.file.originalname), req.body.buffer);
  } catch (err) {
    console.log(err);
  }
};
