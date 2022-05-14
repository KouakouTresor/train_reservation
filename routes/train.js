const express = require("express");
const trainRoute = express.Router()

 trainRoute.get((req,res)=>{
     res.json("train")
 })

 module.exports = trainRoute