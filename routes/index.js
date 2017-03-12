var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { url: 'https://fcc-tut-timestamp-micro.herokuapp.com/timestamp', title: 'Timestamp Microservice' });
});

module.exports = router;
