module.exports = function(connection) {
    require("./evidence.js")(connection);
    require("./credentials.js")(connection);
    
  };
  