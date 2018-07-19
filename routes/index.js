const express = require('express');
const tasks = require('../routes/tasks');

const Task = require('../models/task');

var router = express.Router();


/* GET home page. */
router.get('/', (req, res) => {
  Task.find({}, (err, task) => {
    if (err) { console.log(err); }
    res.render('index', { task });
  }).sort( { urgency: -1 } );
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


router.use('/tasks', tasks);

module.exports = router;
