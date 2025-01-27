const { Router } = require("express");
const messages = require("../messages");

const newMessageRouter = Router();

newMessageRouter
  .route("/")
  .get((req, res) => {
    res.render("form");
  })
  .post((req, res) => {
    messages.push({
      text: req.body.messageText,
      user: req.body.messageUser,
      added: new Date(),
    });
    res.redirect("/");
  });

module.exports = newMessageRouter;
