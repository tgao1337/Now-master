const express = require('express');
const Task = require('../models/task');

const router = express.Router();

//show a specific task

router.get('/tasks/:id', (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    if (err) { console.error(err); }

    res.render('viewtask', { task, taskId: req.params.id });
  });
});

// new

router.get('/new', (req, res) => {
  res.render('new', {});
});
//  router.get('/:id', (req, res) => {
//     //TODO
// });


//create a new task

router.post('/', (req, res) => {
  //Make a new task with the schema

  console.log('New task created!');

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
