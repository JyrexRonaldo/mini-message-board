const { Router } = require("express")

const indexRouter = Router()

indexRouter.get("/", (req,res) => {
    res.send("Hello express")
})

module.exports = indexRouter;