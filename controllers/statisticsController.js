const post = require("../db/models/posts");
const runtimes = require("../db/models/runtimes");
const limit = 10;

const getTopCreators = async () => {
  return await post.aggregate([
    { $group: { _id: "$creator", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: limit },
  ]);
};

const getAverageRuntimes = async () => {
  //return await runtimes.find();
  return true;
};

module.exports = { getTopCreators, getAverageRuntimes };
