ROOT = __dirname;

var express = require("express");
var app = express();
var port = process.env.PORT || 6969;
var cors = require("cors");
var bodyParser = require("body-parser");
var dotenv = require("dotenv");

dotenv.config();
var init_models = require(ROOT + "/config/initializers/mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

init_models();
require("./routes")(app);

var http = require("http").Server(app);

http.listen(port, function() {
  console.log("listening on port " + port);
});
