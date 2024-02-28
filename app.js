var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*const argv = require('./config/yargs');

if(process.argv.length < 3){
  process.exit(0);
}


const miapp = argv.$0;
const comando = argv._[0];
const entidad = argv._[1];*/

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongodbRouter = require('./routes/mongodb');
var seqRouter = require('./routes/seq');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mongodb', mongodbRouter);
app.use('/seq', seqRouter);

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
