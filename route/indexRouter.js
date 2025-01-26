const { Router } = require("express");
const messages = require("../messages")

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    console.log(messages)
  res.render("index", { title: "Mini Messageboard", messages });
});

module.exports = indexRouter;
