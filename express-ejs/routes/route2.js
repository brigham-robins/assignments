var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('route2', { title: 'CodeZone'});
});

module.exports = router;
