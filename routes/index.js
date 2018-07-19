const express = require('express');
const tasks = require('../routes/tasks');

const Task = require('../models/task');

var router = express.Router();

var stars = 0;

/* GET home page. */
router.get('/', (req, res) => {
  Task.find({}, (err, task) => {
    if (err) { console.log(err); }
    res.render('index', { task });
  });
});

//Render confirmation page for clearing completed Tasks

router.get('/deletecompletedconfirm', (req, res) => {
  res.render('completedconfirm');
})

router.get('/deletecompleted', (req, res) => {
  res.render('undoload');
})

router.get('/deleted', (req, res) => {
  Task.find({}, (err, task) => {
    if (err) { console.log(err); }
    res.render('index', { task });
  });
});


router.get('/new', function(req, res, next) {
  res.render('new', { tasks: tasks });
});

router.get('/stars', function(req, res, next) {
  res.render('stars', { tasks: tasks, stars });
});

router.use('/tasks', tasks);

module.exports = router;
