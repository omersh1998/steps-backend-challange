const mongoose = require("mongoose");

const runtimesSchema = new mongoose.Schema({
  creator: "string",
  title: "string",
  body: "string",
  creationDate: "date",
});

const runtimes = mongoose.model("runtime", runtimesSchema);
module.exports = runtimes;
