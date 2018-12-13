"use strict";
require("dotenv").config();
var mongoose = require("mongoose");

module.exports = function() {
  if( process.env.MONGO_URI){
  console.log("Initializer: Mongoose started");

  require(ROOT + "/app/models")();

  mongoose.Promise = global.Promise;

  
  var connectWithRetry = function() {
    mongoose.connect(
      process.env.MONGO_URI,
      {
        reconnectTries: 9999999999,
        connectTimeoutMS: 2000,
        useNewUrlParser:true
      }
    );
  };

  mongoose.connection.on("error", function(err) {
    console.log("Error MONGOOSE: " + err);
    connectWithRetry();
  });

  mongoose.connection.on("connected", function(err) {
    console.log("Successfully Connected");
  });

  connectWithRetry();
  }
};
