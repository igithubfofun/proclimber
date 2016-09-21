var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/all', function(req, res, next) {
  User.findOne({_id: '57e1c29c48a6352523b31659'}, function(err, results) {
    if (err) console.log(err);
    res.render('all', {name: user.name});
  });
});

router.get('/', function(req, res) {
  User.find({}, function(err, results) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(User._id);
    res.status(200).json(results);
  });
});

router.get('/signup', function(req, res) {
  res.render('signup', {});
});

router.post('/signup', function(req, res) {
  var name = req.body.name;
  var screenName = req.body.screenName;
  var email = req.body.email;
  var password = req.body.password;
  var age = req.body.age;
  var height = req.body.height;
  var weight = req.body.weight;

  var newUser = User({
    name: name,
    screenName: screenName,
    email: email,
    password: password,
    age: age,
    height: height,
    weight: weight

  });
    newUser.save(function(err) {
      if (err) console.log(err);
    });

  res.redirect('/users/signup');
});













module.exports = router;
