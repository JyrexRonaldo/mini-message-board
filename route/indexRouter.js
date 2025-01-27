const { Router } = require("express");
const messages = require("../messages");
const {
  getMessageDetails,
  getMessages,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.get("/message/:number", getMessageDetails);

module.exports = indexRouter;
