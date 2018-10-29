var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    var searchtext = req.query.searchtext;
    var url = "https://kgsearch.googleapis.com/v1/entities:search?query="+searchtext+"&key=%20AIzaSyDMEBecZDKiws3eLRFIi1IO1E6Vm9s4Xj8%20&limit=1&indent=True";
    request.get(url).pipe(res);
});

module.exports = router;
