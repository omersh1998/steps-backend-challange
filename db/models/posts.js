const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  creator: "string",
  title: "string",
  body: "string",
  creationDate: "date",
});

const posts = mongoose.model("post", postsSchema);
module.exports = posts;
