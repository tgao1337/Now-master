const express = require('express');
const Task = require('../models/task');
const db = require('mongodb');
const router = express.Router();
const auth = require('./helpers/auth');

const Star = require('../models/star');

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

//render stars
router.get('/stars', auth.requireLogin, function(req, res, next) {
  Task.count( { completed: true}).then((completedTasks) => {
    res.render('stars', {});
  }).catch((err) => {
    console.error(err);
  });
});


//undo task Render

router.get('/tasks/:id/undo', (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    if (err) { console.error(err); }
    res.render('undo', { task, taskId: req.params.id });
  });
});

//Update a task to Redo

router.post('/undo/:id', (req, res) => {
  console.log('Redoing task:' + req.params.id);
  Task.findByIdAndUpdate(req.params.id, { $set: { completed: false } }).then((task) => {
    res.redirect('/');
  }).catch((err) => {
    console.error(err);
  });
});

//Render loading screen while undoing tasks

router.get('/undo/:id', (req, res)  => {
  Task.find({}, (err, task) => {
    if (err) { console.error(err); }
    res.render('undoload', { task });
  });
});

//Render loading screen while deleting tasks

router.get('/deleted/:id', (req, res)  => {
  Task.find({}, (err, task) => {
    if (err) { console.error(err); }
    res.render('undoload', { task });
  });
});

//Clear all completed tasks button

router.post('/deletecompleted', (req, res) => {
  Task.deleteMany( { completed: true, owner: currentUser }).then((task) => {
    res.redirect('/completed');
  }).catch((err) => {
    console.error(err);
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

//update a task after completed confirmed

router.post('/tasks/:id', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body).then((task) => {
    res.redirect('/tasks/:id');
  }).catch((err) => {
    console.error(err);
  });
});

//tasks delete page

router.get('/tasks/:id/delete', (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    if (err) { console.error(err); }
    res.render('delete', { task, taskId: req.params.id });
  });
});

//Update deleted tasks

router.post('/deleted/:id', (req, res) => {
  Task.findByIdAndDelete(req.params.id, req.body).then((task) => {
    res.redirect('/');
  }).catch((err) => {
    console.error(err);
  });
});

// new

router.get('/new', (req, res) => {
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
