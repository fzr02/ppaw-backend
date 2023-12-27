const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require ("serverless-http");
const Route = require("../src/route/route.js")

const app = express();
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://pais:PuKGxyyOhNbiSpl0@cluster0.ftv8bzu.mongodb.net/");
const db = mongoose.connection;

app.use("/.netlify/functions/api/user",Route)

db.on("err", (err) => console.log(err));
db.once("open", () => console.log("Database Connected"));

app.get("/", (req, res) => {
  res.send("P Balapan gas ga");
});

app.listen(5000, () => {
  console.log("Server is running and up....");
});

module.exports.handler = serverless(app);