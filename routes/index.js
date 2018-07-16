const express = require('express');
const tasks = require('./tasks');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { tasks: tasks });
});

router.get('/new', function(req, res, next) {
  res.render('new', { tasks: tasks });
});

module.exports = router;
