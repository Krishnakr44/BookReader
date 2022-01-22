const express = require("express");
// const {
//   loginController,
//   registerController,
// } = require("../controllers/AuthController.js");
const router = express.Router();

// router.post("/login", loginController);
router.get("/", (req, res) => res.send("api"));
// router.post("/register", registerController);

module.exports = router;
