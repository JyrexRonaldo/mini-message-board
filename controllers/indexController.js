const db = require("../db/queries");

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { messages });
}

async function getMessageDetails(req, res) {
  const messages = await db.getAllMessages();
  res.render("message", {
    message: [...messages].reverse()[Number(req.params.number)],
  });
}

module.exports = { getAllMessages, getMessageDetails };
