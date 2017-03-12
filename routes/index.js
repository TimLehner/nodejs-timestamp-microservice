var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { url: 'localhost:3000/timestamp', title: 'Timestamp Microservice' });
});

module.exports = router;
