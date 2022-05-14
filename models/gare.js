const mongoose = require("mongoose");
const gareSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },    
      train: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'train',
        required: true
      }
    ],
     arret: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'arret',
      required: true
    },
    ville: 
  [ 
     {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ville',
      required: true
    }
  ]
});

exports.Gare= mongoose.model("gare", gareSchema);
