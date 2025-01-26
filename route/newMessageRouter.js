const { Router} = require("express")

const newMessageRouter = Router()

newMessageRouter.get("/", (req,res) => {
    res.send("Hello messages")
})

module.exports = newMessageRouter