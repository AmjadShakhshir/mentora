const createError = require('http-errors');
const express = require('express');
const colors = require('colors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require('./config/db');

connectDB();

const cors = require("cors");
const indexRouter = require('./routes/index');
const userRouter = require('./routes/userRoutes');
const goalsRouter = require("./routes/goalsRoutes");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(errorHandler);

app.use('/', indexRouter);
app.use('/api/users', userRouter);
app.use("/api/goals", goalsRouter);

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
