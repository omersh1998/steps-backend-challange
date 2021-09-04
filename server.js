const express = require("express");
const config = require("./config");
const routes = require("./routes/");

const PORT = config.app.port;
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("server is working!");
});

app.use("/", routes);

app.listen(PORT, () => {
  require("./db/db");
  console.log(`running on port ${PORT}`);
});
