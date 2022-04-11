"use strict";

var express = require('express');

var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var _require = require('../models/dishes'),
    Dishes = _require.Dishes; // => localhost:3000/dishes/


router.get('/', function (req, res) {
  Dishes.find(function (err, docs) {
    if (!err) {
      res.send(docs);
    } else {
      console.log('Error in Retriving Dishes :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/dishes/_id

router.get('/:id', function (req, res) {
  if (!ObjectId.isValid(req.params.id)) return res.status(400).send("No record with given id : ".concat(req.params.id));
  Dishes.findById(req.params.id, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Retriving Dishes :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/dishes/restaurant/id_restaurant [getDishesByIdRestaurant]

router.get('/restaurant/:id_restaurant', function (req, res) {
  if (!ObjectId.isValid(req.params.id_restaurant)) return res.status(400).send("No record with given id : ".concat(req.params.id_restaurant));
  Dishes.find({
    id_restaurant: req.params.id_restaurant
  }, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Retriving Dishes :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/dishes/

router.post('/', function (req, res) {
  var dishes = new Dishes({
    created_at: null,
    updated_at: null,
    dishes_name: req.body.dishes_name,
    dishes_desc: req.body.dishes_desc,
    dishes_price: req.body.dishes_price,
    id_restaurant: req.body.id_restaurant
  });
  dishes.save(function (err, docs) {
    if (!err) {
      res.send(docs);
    } else {
      console.log('Error in Dishes Save :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/dishes/_id

router.put('/:id', function (req, res) {
  if (!ObjectId.isValid(req.params.id)) return res.status(400).send("No record with given id : ".concat(req.params.id));
  var dishes = new Dishes({
    created_at: null,
    updated_at: null,
    dishes_name: req.body.dishes_name,
    dishes_desc: req.body.dishes_desc,
    dishes_price: req.body.dishes_price,
    id_restaurant: req.body.id_restaurant,
    _id: req.params.id //required for update

  });
  console.log("Zavatra = " + JSON.stringify(req.params.id));
  Dishes.findByIdAndUpdate(req.params.id, {
    $set: dishes
  }, {
    "new": true
  }, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Dishes Update :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/dishes/_id

router["delete"]('/:id', function (req, res) {
  if (!ObjectId.isValid(req.params.id)) return res.status(400).send("No record with given id : ".concat(req.params.id));
  Dishes.findByIdAndRemove(req.params.id, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Dishes Delete :' + JSON.stringify(err, undefined, 2));
    }
  });
});
module.exports = router;