const express = require('express');
const tasks = require('../routes/tasks');
const users = require('./users');
const Task = require('../models/task');
const auth = require('./helpers/auth');
const User = require('../models/user');

var router = express.Router();


router.use(function(req, res, next) {
  res.locals.title = "Now";
  res.locals.currentUserId = req.session.userId;
  currentUser = res.locals.currentUserId;
  console.log(`Current User Id Index: ${currentUser}`);
  next();
});

/* GET home page. */
router.get('/', auth.requireLogin, (req, res) => {
  Task.find( { owner: currentUser }, (err, task) => {
    console.log(`INSIDE SCOOP: ${currentUser}`);
    if (err) { console.log(err); }
    res.render('index', { task });
  }).sort( { urgency: -1 } );
});

//Show only completed tasks

router.get('/completed', auth.requireLogin, (req, res) => {
  Task.find({ owner: currentUser }, (err, task) => {
    if (err) { console.log(err); }
    res.render('completed', { task });
  });
});

router.get('/login', (req, res) => {
  console.log('Login screen');
  res.render('login', {});
});

//Render confirmation page for clearing completed Tasks

router.get('/deletecompletedconfirm', (req, res) => {
  res.render('completedconfirm');
})
//Redirect from deletecompleted after deleting a task
router.get('/deletecompleted', (req, res) => {
  res.render('undoload');
})

router.get('/deleted', (req, res) => {
  Task.find({}, (err, task) => {
    if (err) { console.log(err); }
    res.render('index', { task });
  });
});

//Make a new task
router.get('/new', function(req, res, next) {
  res.render('new', { tasks: tasks });
});
//Username is taken
router.get('/users/new/taken', (req, res, next) => {
  res.render('registerbad');
});

//Password is weak
router.get('/users/new/format', (req, res, next) => {
  res.render('formatPassword');
});
//Confirm password failure
router.get('/users/new/confirm', (req, res, next) => {
  res.render('unconfirmed');
});
//Login render
router.get('/login', (req, res, next) => {
  res.render('login');
});
//Bad login
router.get('/login/fail', (req, res, next) => {
  res.render('loginrep');
});

// POST login
router.post('/login', (req, res, next) => {
  User.authenticate(req.body.username, req.body.password, (err, user) => {
    if (err || !user) {
      const next_error = 1 //new Error("Username or password incorrect");
      next_error.status = 401;
      console.log('Login failed!');
      return res.redirect('/login/fail') ;
      return next(next_error);
    } else {
      console.log('Login successful!');
      req.session.userId = user._id;
      //console.log(`Current User Id: ${currentUserId}`);
      return res.redirect('/') ;
    }
  });
});

//logout

router.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) return next(err);
    });
  }
  return res.redirect('/login');
});


router.use('/tasks', tasks);

module.exports = router;
