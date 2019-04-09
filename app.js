var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var equipesRouter = require('./routes/equipes');
var joueursRouter = require('./routes/joueurs');
var matchsRouter = require('./routes/matchs');
var phasesRouter = require('./routes/phases');
var tournoisRouter = require('./routes/tournois');
var usersRouter = require('./routes/users');

// db file
var db = require('./db/database');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/static/icons', express.static(__dirname + '/node_modules/material-design-icons/iconfont'));
app.use('/static/js', express.static(__dirname + '/node_modules/vue/dist/'));

app.use('/server/api/equipes', equipesRouter);
app.use('/server/api/joueurs', joueursRouter);
app.use('/server/api/matchs', matchsRouter);
app.use('/server/api/phases', phasesRouter);
app.use('/server/api/tournois', tournoisRouter);
app.use('/server/api/users', usersRouter);

// Server index.html page when request to the root is made
app.get('/', function (req, res, next) {
  res.sendfile('./public/index.html')
});

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
