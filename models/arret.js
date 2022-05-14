const mongoose = require("mongoose");
const arretSchema = mongoose.Schema({
    heureArrive: {
        type: Number,
        required: true,
      },
      heureDep: {
          type: Number,
          required: true,
      },
  gare: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'gare',
    required: true
  },
  train: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'train',
    required: true
  },
});

exports.Arret = mongoose.model("arret", arretSchema);
