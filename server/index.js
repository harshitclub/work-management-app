const express = require("express");
const app = express();
const cors = require("cors");
const dbConfig = require("./config/dbConfig");
const bodyParser = require("body-parser");
require("dotenv").config();
const userRoute = require("./routes/userRoute");

PORT = process.env.PORT || 4001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, (req, res) => {
  console.log(`${PORT}`);
});
