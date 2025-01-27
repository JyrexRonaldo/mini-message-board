const messages = require("../messages");

const renderInputForm = (req, res) => {
  res.render("form");
};

const updateMessagesObject = (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
};

module.exports = { renderInputForm, updateMessagesObject };
