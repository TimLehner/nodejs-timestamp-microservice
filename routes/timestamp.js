var express = require('express');
var dateFormat = require('dateformat');
var router = express.Router();

/* GET users listing. */
router.get('/:query', function(req, res, next) {
    var query = req.params.query;
    var unixtime = 0;
    var prettyDate = "";
    if (!isNaN(query)) {
        unixtime = parseInt(query);
        var date = new Date(unixtime * 1000);
        prettyDate = dateFormat(date, "mmmm d, yyyy");
    } else {
        unixtime = Date.parse(query) / 1000;
        prettyDate = (unixtime) ? query : null;
    }
    res.end(JSON.stringify({unix: unixtime, natural: prettyDate}));
});

module.exports = router;
