const { Router } = require("express");
const newMessageController = require("../controllers/newMessageController");

const newMessageRouter = Router();

newMessageRouter
  .route("/")
  .get(newMessageController.renderInputForm)
  .post(newMessageController.addNewMessage);

module.exports = newMessageRouter;
