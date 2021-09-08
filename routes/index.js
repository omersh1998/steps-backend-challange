const express = require("express");
const routes = express.Router();

const posts = require("./posts/");
const postsnumber = require("./posts/totalPostsNumber");
const statistics = require("./statistics/");

routes.use("/posts", posts);
routes.use("/statistics", statistics);

routes.get("/postsnumber", postsnumber);

module.exports = routes;
