const postsController = require("../../controllers/postsController");

const getPosts = async (req, res, next) => {
  const posts = await postsController.getPosts();
  console.log(posts);
  res.send(posts);
};

module.exports = getPosts;
