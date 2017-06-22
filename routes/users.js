var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a user resource');
});
router.get('/well', function(req, res, next) {
    res.send('respond with a resource well');
});
module.exports = router;
