var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/v1/tracker', function(req, res, next) {

  res.json({"err":"No data"})
  res.status(204);
});

/* GET home page. */
router.post('/v1/tracker', function(req, res, next) {

    res.json({"err":"Not implemented"})
    res.statusCode(204);
});
module.exports = router;