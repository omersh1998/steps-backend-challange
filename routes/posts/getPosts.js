const postsController = require("../../controllers/postsController");
const statisticsController = require("../../controllers/statisticsController");

const getPosts = async (req, res, next) => {
  const start = Date.now();
  const posts = await postsController.getPosts();
  statisticsController.saveRuntimes("getPost", start);
  res.send(posts);
};

module.exports = getPosts;
