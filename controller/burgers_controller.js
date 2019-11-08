const express = require('express')
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  var allResult;
  burger.all(function (data) {

    toEatList = [];
    ateList = [];
    data.forEach(function (element) {
      if (element.devoured == "n") {
        toEatList.push(element)
      } else {
        ateList.push(element)
      };
    });

    console.log(toEatList);

    var allResult = {
      toEat: toEatList,
      ate: ateList
    };


    res.render("index", allResult);

    // burger.toEatList(function (data) {
    //   allResult.toEat = data;
    // console.log("controller return:" + allResult)

    // });
  });
});

router.post("/api/add-burger", function (req, res) {

  var burgerAdd = req.body;

  burger.insertOne([burgerAdd.name], function (data) {

    console.log("complete")
  });

});

router.post("/api/ate-burger", function (req, res) {

  var burgerAdd = req.body;
  console.log("ate" + burgerAdd);
  console.log("ate" + burgerAdd.name)

  burger.update([burgerAdd.name], function (data) {

  });

});

module.exports = router;