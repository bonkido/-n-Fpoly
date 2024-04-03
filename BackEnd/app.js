var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const morgan = require('morgan');
const methodOverride = require('method-override')
var cors = require("cors");


// kết nối đến database của mongodb
const db = require('./config/db');
db.connect();

// trỏ đến file muốn in
var productsRouter = require('./routes/products');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(methodOverride('_method'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // kiểm tra xem join vào đường dẫn đó được không 
app.use(morgan('combined'));

// basic routing (đường dẫn trên https) ------ app.use(path,(handlebars));
app.use('/product', productsRouter);
app.use('/', indexRouter);
app.use('/user', usersRouter);

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
