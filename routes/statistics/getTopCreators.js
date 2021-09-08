const statisticsController = require("../../controllers/statisticsController");

const getTopCreators = async (req, res, next) => {
  const topCreators = await statisticsController.getTopCreators();
  res.json({ topCreators: topCreators });
};

module.exports = getTopCreators;
