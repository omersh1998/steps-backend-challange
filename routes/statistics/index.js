const statistics = require("express").Router();

const getTopCreators = require("./getTopCreators");
const getAverageRuntimes = require("./getAverageRuntimes");

statistics.get("/topcreators", getTopCreators);
statistics.get("/runtimes", getAverageRuntimes);

module.exports = statistics;
