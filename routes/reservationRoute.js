const express = require("express")
const reservationRoute = express.Router()
const { Reservation } = require('../models/reservation')

reservationRoute.get('/', async (req, res)=>{
/* const reservation = new Reservation({

}) */
res.send("page de reservation")
})

module.exports = reservationRoute;