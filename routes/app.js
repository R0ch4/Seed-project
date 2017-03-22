var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { email: doc });
});

module.exports = router;