var express = require('express');
var router = express.Router();


var data = [];

/* GET home page. */
router.get('/v1/tracker', function(req, res, next) {

  res.json(data);
  //res.json({"err":"No data"})
  res.status(204);
});

/* GET home page. */
router.post('/v1/tracker', function(req, res, next) {
  var parsed = parseInt(req.body.payload, 10);
  if (isNaN(parsed)) { 
    res.status(400);
    res.json({"status": "error", "errorMsg": "Invalid integer input"});
  } else {
    data.push(req.body.payload);
    res.status(200);
    res.json({"status": "ok"});
  }

});
module.exports = router;