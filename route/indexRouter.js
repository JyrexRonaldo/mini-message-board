const { Router } = require("express");
const indexController = require("../controllers/indexController")

const indexRouter = Router();

indexRouter.get("/", indexController.getMessages);
indexRouter.get("/message/:number", indexController.getMessageDetails);

module.exports = indexRouter;
