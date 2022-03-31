import express from "express";
import route from "./testAPI.js";

const testAPIRouter = route;
const app = express();

app.get('/', function (req, res) {
  res.send("hello world!");
});

app.use("/testAPI", testAPIRouter);

app.use("/wordle", function (req, res) {
  res.send("hello world2!");
});



app.listen(5080);