var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var credentialsSchema = new Schema({
    name: {
      type: String,
    },
    key: {
        type: String,
    },
    secret:{
        type: String
    },
    password:{
        type: String
    }
  },
   { timestamps: true, 	collection: 'credentials'});

module.exports = mongoose.model("Credentials", credentialsSchema);
