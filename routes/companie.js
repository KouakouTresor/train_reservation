const express = require("express");
const compagnieRoute = express.Router()

compagnieRoute.get((req,res)=>{
     res.json("companie")
 })

 module.exports = compagnieRoute