;
const express = require('express')
var exphbs = require("express-handlebars")
var path = require("path");
var PORT = process.env.PORT || 8080;
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controller/burgers_controller.js");
app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  