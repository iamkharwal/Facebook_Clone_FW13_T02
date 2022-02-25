/** @format */

const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const multer = require("multer");
const postRoute = require("./routes/post");
const path = require("path");

const conversationRoute = require("./routes/conversation");
const MessageRoute = require("./routes/messages");
//middleware
app.use("/images", express.static(path.join(__dirname, "../public/images")));
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", MessageRoute);

module.exports = app;
