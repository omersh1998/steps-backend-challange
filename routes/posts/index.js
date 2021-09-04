const posts = require("express").Router();

const getPosts = require("./getPosts");
const createPost = require("./createPost");

posts.get("/", getPosts);
posts.post("/", createPost);

module.exports = posts;
