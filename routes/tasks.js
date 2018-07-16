const express = require('express');
const Task = require('../models/task');

const router = express.Router();

//index (view all tasks)

router.get('/index', function(req, res, next) {
  if (err) {
    console.error(err);
  } else {

    var allTasks = db.collection.tasks
    console.log(`allTasks: ${allTasks}`);
    res.render('index', { allTasks });
  }
});

//show (Select an individual task)

// router.get('/:id', (req, res) => {
//   //TODO
// });

//new

router.get('/new', function(req, res, next) {
  res.render('new', {});
});

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
