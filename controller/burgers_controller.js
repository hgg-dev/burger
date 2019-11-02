const express = require('express')
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function(data){
    var allResult = {
      burgers: data
    };
    console.log("controller return:" + allResult)
    res.render("index", allResult);
  });
});

router.post("/api/add-burger", function (req, res) {

  var burgerAdd = req.body;

  burger.insertOne([burgerAdd.name],function(data){

   console.log("complete")
  });

});

module.exports = router;