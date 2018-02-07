var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function (req, res) {

    burger.all(function (data) {

        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/', function (req, res) {

    burger.create([
        "burger_name"
    ], [
        req.body.burger_name

    ], function () {
        res.redirect('/');
    });
});

router.put('/:id', function (req, res) {

    var burgerID = 'id = ' + req.params.id;

    burger.update({

        devoured: req.body.devoured

    }, burgerID, function () {
        res.redirect('/');
    });
});

module.exports = router;