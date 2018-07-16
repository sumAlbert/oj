const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extend: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/../public')));//eslint-disable-line

app.use('/', indexRouter);
app.use('/users', usersRouter);
module.exports = app;
