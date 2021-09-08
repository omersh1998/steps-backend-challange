const post = require("../db/models/posts");
const runtime = require("../db/models/runtimes");
const limit = 10;

const getTopCreators = async () => {
  return await post.aggregate([
    { $group: { _id: "$creator", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: limit },
  ]);
};

const saveRuntimes = (action, start) => {
  let newRuntime = new runtime({
    action: action,
    runtime: Date.now() - start,
  });
  return newRuntime
    .save()
    .then((a) => {
      console.log(`saved runtime = ${a}`);
      return true;
    })
    .catch((err) => {
      console.log(`error saving runtime: ${err}`);
      return false;
    });
};

const getAverageRuntimes = async () => {
  let getRuntimes = await runtime.find();
  let getPostSum = 0,
    getPostcount = 0,
    createPostSum = 0,
    createPostcount = 0;

  getRuntimes.map((item) => {
    if (item.action == "getPost") {
      getPostSum += item.runtime;
      getPostcount++;
    }
    if (item.action == "createPost") {
      createPostSum += item.runtime;
      createPostcount++;
    }
  });
  return {
    getPostAverage: `${getPostSum / getPostcount} ms`,
    createPostAverage: `${createPostSum / createPostcount} ms`,
  };
};

module.exports = { getTopCreators, getAverageRuntimes, saveRuntimes };
