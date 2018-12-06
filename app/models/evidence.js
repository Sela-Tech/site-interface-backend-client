var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var evidenceSchema = new Schema({
    latitude: {
      type: Number,
    },
    longitude: {
        type: Number,
    },
    datetime:{
        type: Date
    },
    evidence_name:{
        type: String
    },
    site_name:{
        type: String
    },
    author: {
      type: String,
      required: true
    },
  },
   { timestamps: true, 	collection: 'site_registration'});

module.exports = mongoose.model("Evidence", evidenceSchema);