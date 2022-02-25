// const helmet = require("helmet");
// const morgan = require("morgan");

const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const postRoute = require("./routes/post");

const conversationRoute = require("./routes/conversation");
const MessageRoute = require("./routes/messages");
//middleware
app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", MessageRoute);

module.exports = app;
