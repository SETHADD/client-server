const express = require("express")
const cors = require("cors")
const axios = require("axios")
require("dotenv").config()
const PORT = process.env.PORT || 8090
const ACCESS_KEY =process.env.ACCESS_KEY

const app = express()
app.use(cors())

app.get("/",(request,response)=>{
    response.json("Ican be heard")
    console.log("I can be heard")
})
 

app.get("/location", async (request,response)=>{
    const API = `https://eu1.locationiq.com/v1/reverse?key=${ACCESS_KEY}&lat=${37.456}&lon=${45.788}&format=json`
   const res = await axios.get(API)
   console.log(res)
//    response.status(200).json(res)
})

app.listen(PORT, ()=>console.log(`app is listening on port ${PORT}`))