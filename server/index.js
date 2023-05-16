const express = require("express");
const app = express();
const dbConfig = require("./config/dbConfig");
require("dotenv").config();

PORT = process.env.PORT || 4001;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, (req, res) => {
  console.log(`${PORT}`);
});
