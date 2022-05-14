const mongoose = require("mongoose");
const reservationSchema = mongoose.Schema({
    confirme: {
        type: Boolean,
        required: true,
      },
      annule: {
        type: Boolean,
        required: true,
      },
      train: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'train',
        required: true
      },
      passager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'passager',
        required: true
      },
      client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client',
        required: true
      },
      companie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companie',
        required: true
      },
});

exports.Reservation = mongoose.model("reservation", reservationSchema);
