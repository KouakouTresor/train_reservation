const mongoose = require("mongoose");
const clientSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true,
      },
      prenom: {
        type: String,
        required: true,
      },
      adresse: {
        type: String,
        required: true,
      },
      telephone: {
        type: String,
        required: true,
      },
  companie: [
      {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'companie',
    required: true
  },
],
reservation: [
  {
type: mongoose.Schema.Types.ObjectId,
ref: 'reservation',
required: true
},
]
});

exports.Client = mongoose.model("client", clientSchema);
