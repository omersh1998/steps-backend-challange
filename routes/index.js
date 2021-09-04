const express = require("express");
const routes = express.Router();

const posts = require("./posts/");
const statistics = require("./statistics/");

routes.use("/posts", posts);
routes.use("/statistics", statistics);

module.exports = routes;
