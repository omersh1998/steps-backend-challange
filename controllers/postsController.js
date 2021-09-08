const post = require("../db/models/posts");

const createPost = (creator, title, body) => {
  let newPost = new post({
    creator: creator,
    title: title,
    body: body,
    creationDate: Date.now(),
  });
  newPost.save();
  return true;
};

const getPosts = async () => {
  let result = await post.find().sort({ creationDate: 1 }).exec();
  return result;
};

const getTotalPostsNumber = async () => {
  let result = await post.distinct("_id").count().exec();
  return result;
};

module.exports = { createPost, getPosts, getTotalPostsNumber };
