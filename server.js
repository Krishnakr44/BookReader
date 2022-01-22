const express = require("express");
const apiRoutes = require("./routes/apiRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const dbConnect = require("./middlewares/db.js");

// import path, { dirname } from 'path'
// import { fileURLToPath } from 'url'
//Initialising dotenv
require("dotenv").config();
//Initialising database
dbConnect();

//Initialising Express
const app = express();
app.use(express.json());

//Basic Routes
app.use("/api", apiRoutes);
app.use("/auth", authRoutes);

// const __dirname = dirname(fileURLToPath(import.meta.url))

// app.use(express.static(path.resolve(__dirname, 'client', 'build')))

// app.get('/', function (req, res) {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// })
const PORT = process.env.PORT;
app.listen(PORT || 5000, () => console.log("Server Running"));
