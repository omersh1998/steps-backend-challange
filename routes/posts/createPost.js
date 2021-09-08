const postsController = require("../../controllers/postsController");

const createPost = (req, res, next) => {
  console.log("were hereeee");
  const { creator, title, body } = req.body;
  console.log(creator);
  console.log(title);
  console.log(body);
  const success = postsController.createPost(creator, title, body);
  if (success) res.status(200).json({ success: "true", message: "success" });
  else res.status(500).json({ success: "false", message: "error saving post" });
};

module.exports = createPost;
