const express = require("express");
const {
  loginController,
  registerController,
  profileController,
} = require("../controllers/AuthController.js");
const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/profile", profileController);

module.exports = router;
