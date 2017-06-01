const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = express.Router();
const dotenv = require('dotenv').config({ path: '.env' });



const index = require('./routes/index');
const users = require('./routes/users');

const app = express();

const mongoose = require('mongoose');

// connect to mongo db
mongoose.connect(process.env.MONGOLAB_LOCAL_URI);

const { connection: db } = mongoose;

// setting up error logs
db.on('error', console.error.bind(console, 'connection error:'));
// when there is error will log to console
db.once('open', () => {
  console.log('connected to app database')
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// moving all routes to /api
// app.use('/api', router);

// setting test dummy router
router.get('/', function(req, res) {
  res.json({ message: 'This is a test!' });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
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
