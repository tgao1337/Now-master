const express = require('express');
const Task = require('../models/task');

const router = express.Router();

//index (view all tasks)

router.get('/', function(req, res, next) {
  res.render('index', { tasks: tasks });
});

//show (Select an individual task)

router.get('/:id', (req, res) => {
  //TODO
});

//new

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Now' });
});

//create a new task

router.post('/', (req, res) => {
  //Make a new task with the schema
  const task = new Task(req.body);

  //Save the task
  task.save((err, task) => {
    //If there's an error, register it
    if (err) { console.error(err); }

    //redirect the user back to index
    return res.redirect('/');
  });
});

module.exports = router;
