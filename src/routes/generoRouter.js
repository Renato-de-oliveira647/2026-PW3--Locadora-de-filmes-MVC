const express = require("express")
const router = express.Router()

const GeneroController =require("../controllers/generosControllers")

router.get("/", GeneroController.getAllGeneros)
router.post("/", GeneroController.getAllGeneros)

module.exports = router