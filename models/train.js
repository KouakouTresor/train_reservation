const mongoose = require("mongoose");
const trainSchema = mongoose.Schema({
    numero: {
        numero: Number,
        required: true,
      },
      heureDep: {
        type: Number,
        required: true,
      },
      heureArrive: {
        type: Number,
        required: true,
      },
      dateDep: {
        type: Number,
        required: true,
      },
      dateArrive: {
        type: Number,
        required: true,
      },
      companie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companie',
        required: true
      },
      reservation: [
          {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reservation',
        required: true
      }
    ],
    gare: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'gare',
        required: true
      },
      arret: [
          {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'arret',
        required: true
      }
    ],
});

exports.Train = mongoose.model("train", trainSchema);
