const messages = require("../messages");

const getMessages = (req, res) => {
  res.render("index", { messages });
};

const getMessageDetails = (req, res) => {
  res.render("message", {
    message: [...messages].reverse()[Number(req.params.number)],
  });
};

module.exports = { getMessages, getMessageDetails };
