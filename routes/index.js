var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('./public/index.html'))
});

router.get('/login', function(req, res, next) {
  res.sendFile(path.resolve('./public/login.html'))
});

router.get('/signup', function(req, res, next) {
  res.sendFile(path.resolve('./public/signup.html'))
});

module.exports = router;
