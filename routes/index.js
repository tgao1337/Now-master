const express = require('express');
const tasks = require('../routes/tasks');

const Task = require('../models/task');

var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  Task.find({}, 'task', (err, task) => {
    if (err) { console.log(err); }

    res.render('index', { task: task });
  });
});

router.get('/index', function(req, res, next) {
  res.render('index', { tasks: tasks });
});

router.get('/new', function(req, res, next) {
  res.render('new', { tasks: tasks });
});

router.use('/tasks', tasks);

module.exports = router;
