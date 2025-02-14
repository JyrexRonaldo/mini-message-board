const db = require("../db/queries")

const renderInputForm = (req, res) => {
  res.render("form");
};

async function addNewMessage(req, res) {
  await db.addNewMessage(req.body.messageUser,req.body.messageText)
  res.redirect("/");
}

module.exports = { renderInputForm, addNewMessage };
