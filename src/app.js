const express = require("express")

const testRoutes = require("./routes/testroutes")
const generoRoutes =require("./routes/generoRouter")

const app = express()
 
app.use(express.json())

app.get("/",(req,res)=>{
    return res.send("API DA LOCADORA FUNCIONANDO !")
})

app.use("/test",testRoutes)
app.use("/generos",generoRoutes)

module.exports = app

