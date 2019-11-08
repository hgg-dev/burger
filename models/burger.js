// var express = require("express");
var orm = require("../config/orm.js");


var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  toEatList: function (cb) {
    orm.toEatList("burgers", function (res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  insertOne: function (vals, cb) {
    orm.insertOne(vals, function (res) {
      cb(res);
    });
  },
  update: function (burgerName, cb) {
    orm.update(burgerName, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;
