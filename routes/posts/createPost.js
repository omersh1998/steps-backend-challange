const postsController = require("../../controllers/postsController");
const statisticsController = require("../../controllers/statisticsController");

const createPost = (req, res, next) => {
  const start = Date.now();
  const { creator, title, body } = req.body;
  console.log(`creator: ${creator}, body: ${body}, title: ${title}`);
  const success = postsController.createPost(creator, title, body);
  statisticsController.saveRuntimes("createPost", start);

  if (success) {
    res.status(200).json({ success: "true", message: "success" });
  } else
    res.status(500).json({ success: "false", message: "error saving post" });
};

module.exports = createPost;
