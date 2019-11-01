const express = require('express')
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {

  var test = 0;
  res.render("index", { title: 'Hey', message: 'Hello there!' });
  // res.json("It works");
});


router.post("/api/add-burger", function (req, res) {

  var burgerAdd = req.body.burger;


});

module.exports = router;