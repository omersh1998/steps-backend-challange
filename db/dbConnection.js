const mongoose = require("mongoose");
const config = require("../config");

const {
  db: { host, port, name },
} = config;
const connectionString = `mongodb://${host}:${port}/${name}`;

try {
  mongoose.connect(connectionString);
  console.log("connected");
} catch (error) {
  console.log(error);
}

mongoose.connection.on("error", (err) => {
  console.log(err);
});
