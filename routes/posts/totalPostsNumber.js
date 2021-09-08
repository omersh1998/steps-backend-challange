const postsController = require("../../controllers/postsController");

const totalPostsNumber = async (req, res, next) => {
  const totalnumber = await postsController.getTotalPostsNumber();
  console.log(totalnumber);
  res.json({ totalnumber: totalnumber });
};

module.exports = totalPostsNumber;
