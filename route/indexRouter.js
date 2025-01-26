const { Router } = require("express");
const messages = require("../messages")

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});
indexRouter.get("/message/:number", (req,res) => {
  res.render("message", {message: messages[Number(req.params.number)]})
})

module.exports = indexRouter;
