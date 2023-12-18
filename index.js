const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.static('public'));

const port = process.env.PORT;

const apiData = require("./data.json");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { jsonData: apiData });
});
app.get("/api", (req, res) => {
  res.send(apiData);
});

app.listen(port, () => {
  console.log(`Server Is Live ${port}`);
});
