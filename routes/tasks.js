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

//Confirm completion render

router.get('/tasks/:id/confirm', (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    if (err) { console.error(err); }
    res.render('confirm', { task, taskId: req.params.id });
  });
});

// Render task edit page

router.get('/tasks/:id/edit', (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    if (err) { console.error(err); }

    res.render('edit', { task });
  });
});

//Update a task (after edits)

router.post('/tasks/:id', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body).then((task) => {

    res.redirect(`/tasks/${req.params.id}`);

  }).catch((err) => {

    console.error(err);

  });
});

//Show only completed tasks

router.get('/completed', (req, res) => {
  Task.find({}, (err, task) => {
    if (err) { console.log(err); }
    res.render('completed', { task });
  });
});

//update a task after completed confirmed

router.post('/completed', (req, res) => {
  console.log('Task updated');

  Task.findByIdAndUpdate(req.params.id, req.body).then((task) => {

    res.redirect('/completed');

  }).catch((err) => {

    console.error(err);
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
