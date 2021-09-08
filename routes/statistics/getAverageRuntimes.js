const statisticsController = require("../../controllers/statisticsController");

const getAverageRuntimes = async (req, res, next) => {
  const averageRuntimes = await statisticsController.getAverageRuntimes();
  console.log(averageRuntimes);
  res.send(averageRuntimes);
};

module.exports = getAverageRuntimes;
