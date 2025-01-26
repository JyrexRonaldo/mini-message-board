const { Router } = require("express");
const messages = require("../messages");

const newMessageRouter = Router();

newMessageRouter
  .route("/")
  .get((req, res) => {
    res.render("form");
  })
  .post((req, res) => {
    console.log(req.body);
    messages.push({
      text: req.body.messageUser,
      user: req.body.messageText,
      added: new Date(),
    });
    res.redirect("/");
  });

module.exports = newMessageRouter;
