const { Router } = require("express");
const indexController = require("../controllers/indexController")

const indexRouter = Router();

indexRouter.get("/", indexController.getAllMessages);
indexRouter.get("/message/:number", indexController.getMessageDetails);

module.exports = indexRouter;
