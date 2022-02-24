
const mongoose = require("mongoose");

const env = require("dotenv");

env.config();

module.exports = () => {
  return mongoose.connect(process.env.MONGO_URL);
};
