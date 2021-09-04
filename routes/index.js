const express = require("express");
const routes = express.Router();

const posts = require("./posts/");

routes.use("/posts", posts);

module.exports = routes;
