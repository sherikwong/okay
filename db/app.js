var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes');
var itemsRouter = require('./routes/route/items');
var tasksRouter = require('./routes/route/tasks');
var usersRouter = require('./routes/route/users');
var assignedTasksRouter = require('./routes/route/assignedTasks');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'view')));
app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// })

app.use('/', indexRouter);
app.use('/assignedTasks', assignedTasksRouter);
app.use('/tasks', tasksRouter);
app.use('/items', itemsRouter);
app.use('/users', usersRouter);
// okayRoutes.link(app);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
