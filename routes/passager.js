const express = require("express");
const passagerRoute = express.Router()

passagerRoute.get((req,res)=>{
     res.json("passager")
 })

 module.exports = passagerRoute