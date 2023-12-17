const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors())

const port = process.env.PORT || 8000;

const apiData = require("./data.json");

app.get("/", (req, res) => {
  res.send("Hellooooo!");
});
app.get("/api", (req, res) => {
  res.send(apiData);
});

app.listen(port, () => {
  console.log(`Server Is Live`);
});
