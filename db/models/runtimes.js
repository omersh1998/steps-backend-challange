const mongoose = require("mongoose");

const runtimesSchema = new mongoose.Schema({
  action: "string",
  runtime: "number",
});

const runtimes = mongoose.model("runtime", runtimesSchema);
module.exports = runtimes;
