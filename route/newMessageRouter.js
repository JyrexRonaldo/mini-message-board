const { Router } = require("express");
const { renderInputForm, updateMessagesObject } = require("../controllers/newMessageController");

const newMessageRouter = Router();

newMessageRouter
  .route("/")
  .get(renderInputForm)
  .post(updateMessagesObject);

module.exports = newMessageRouter;
