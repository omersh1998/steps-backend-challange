const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const routes = require("./routes/");

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
  console.log(`running on port ${PORT}`);
});
