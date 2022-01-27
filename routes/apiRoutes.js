const express = require("express");
const { addPostController } = require("../controllers/apiController");
const protect = require("../middlewares/checkAuth");
const router = express.Router();

router.post("/add_post", protect, addPostController);

module.exports = router;
