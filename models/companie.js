const mongoose = require("mongoose");
const companieSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true,
      },
      annule: {
          type: Boolean,
          required: true,
      },
  client:
 [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'client',
    required: true
  },
],
  reservation: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'reservation',
    required: true
  },
],
  train: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'train',
    required: true
  }
],
});

exports.Companie= mongoose.model("companie", companieSchema);
