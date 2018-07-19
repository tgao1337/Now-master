const express = require('express');
const tasks = require('../routes/tasks');

const Task = require('../models/task');

// const cron = require('../node_modules/node-cron');
//
// const taskx = cron.schedule('* * * * * *', function(){
//   console.log('running a task every sec');
//
//     var dueDate = new Date();
//     var DateISO8601 = dueDate.toISOString();
//     function plss() {
// document.getElementById("r").innerHTML = '<input type="date" name="dueDate" class="mdl-textfield__input" id="task-dueDate" placeholder="mm/dd/yyyy" min="'+dateiso+'" max="2099-12-31">';
//       // $('#task-dueDate').attr("min", datiso);
//     }
//     plss();
//     console.log(DateISO8601);
//     var datiso = DateISO8601.split(["T"],10);
//     // $('#task-dueDate').html('<input type="date" name="dueDate" class="mdl-textfield__input" id="task-dueDate" placeholder="mm/dd/yyyy" max="2099-12-31">');
//     // // $('#task-dueDate').attr("min", datiso);
//     // document.getElementById("r").innerHTML = '<input type="date" name="dueDate" class="mdl-textfield__input" id="task-dueDate" placeholder="mm/dd/yyyy" min="'+dateiso+'" max="2099-12-31">';
//     console.log('Teet jquery');
// });
// taskx.start();

cron.schedule('* * * * *', function(){
  console.log('running a task every minute');
});

var router = express.Router();

var stars = 0;

/* GET home page. */
router.get('/', (req, res) => {
  Task.find({}, (err, task) => {
    if (err) { console.log(err); }
    console.log("sssssss");
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
