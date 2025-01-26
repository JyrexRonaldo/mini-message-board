const express = require("express");
const app = express();
const path = require("node:path")
const indexRouter = require("./route/indexRouter");
const newMessageRouter = require("./route/newMessageRouter");

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use("/new", newMessageRouter);
app.use("/", indexRouter);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 9000;

app.listen(PORT, () => {
  console.log("My express app running on Port 9000");
});
