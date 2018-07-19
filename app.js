var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const tasks = require('./routes/tasks');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var stars = 0;


const cron = require('../node_modules/node-cron');

const taskx = cron.schedule('* * * * * *', function(){
  console.log('running a task every sec');

    var dueDate = new Date();
    var DateISO8601 = dueDate.toISOString();
    function plss() {
document.getElementById("r").innerHTML = '<input type="date" name="dueDate" class="mdl-textfield__input" id="task-dueDate" placeholder="mm/dd/yyyy" min="'+dateiso+'" max="2099-12-31">';
      // $('#task-dueDate').attr("min", datiso);
    }
    plss();
    console.log(DateISO8601);
    var datiso = DateISO8601.split(["T"],10);
    // $('#task-dueDate').html('<input type="date" name="dueDate" class="mdl-textfield__input" id="task-dueDate" placeholder="mm/dd/yyyy" max="2099-12-31">');
    // // $('#task-dueDate').attr("min", datiso);
    // document.getElementById("r").innerHTML = '<input type="date" name="dueDate" class="mdl-textfield__input" id="task-dueDate" placeholder="mm/dd/yyyy" min="'+dateiso+'" max="2099-12-31">';
    console.log('Teet jquery');
});
taskx.start();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/', tasks);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  console.log("404040400404040");
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log("404040400404040");
  res.render('error');
});

const mongoURI = 'mongodb://now:makeschoo1@ds239681.mlab.com:39681/msh-now';

mongoose.connect(mongoURI);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection Error:'));

module.exports = app;
