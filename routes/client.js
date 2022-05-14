const express = require("express");
const clientRoute = express.Router()

clientRoute.get((req,res)=>{
     res.json("client")
 })

 module.exports = clientRoute