const mongoose = require("mongoose");
const passagerSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true,
      },
      prenom: {
        type: String,
        required: true,
      },
  reservation: [
      {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'reservation',
    required: true
  },
]
});

exports.PassagerItem = mongoose.model("passager", passagerSchema);
