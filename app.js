const express = require('express')
const app = express();
const mongoose = require('mongoose')
const reservationRoute = require('./routes/reservationRoute')
const trainRoute = require('./routes/train')
const clientRoute = require('./routes/client')
const passagerRoute = require('./routes/passager')
const compagnieRoute = require('./routes/companie')
app.use(express.json())


//Routes 
app.use(`/reservation`, reservationRoute);
app.use('/train', trainRoute);
app.use(`/client`, clientRoute);
app.use('/passager', passagerRoute);
app.use('/compagnie', compagnieRoute);

mongoose.connect("mongodb+srv://tresor:tresor@cluster0.3bfzc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, dbName: "tp_reservation"})
  .then(() => console.log("connection to DB"))
  .catch((err) => {
    console.log(err);
  }); 

app.get("/", (req, res) => {
  res.json("hello world");
});

app.listen(3000, () => {
  console.log("HELLO WORLD");
});
