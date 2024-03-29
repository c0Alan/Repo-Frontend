var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 自定义对象
const session = require('express-session');
const entries = require('./routes/entries');
const validate = require('./middleware/validate');
const register = require('./routes/register');
const messages = require('./middleware/messages');
const login = require('./routes/login');
const user = require('./middleware/user');
const api = require('./routes/api');
const page = require('./middleware/page');
const Entry = require('./models/entry');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));
app.use(messages);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api.auth);
app.use(user);

// app.use('/', indexRouter);
app.use('/users', usersRouter);

// 自定义路由
// listing6_31-32
app.get('/', entries.list);
app.get('/post', entries.form);
app.post('/post',
    validate.required('entry[title]'),
    validate.lengthAbove('entry[title]', 4),
    entries.submit);
app.get('/register', register.form);
app.post('/register', register.submit);
app.get('/login', login.form);
app.post('/login', login.submit);
app.get('/logout', login.logout);


app.get('/api/user/:id', api.user);
// app.get('/api/entries/:page?', api.entries);
// app.post('/api/entry', api.add);
app.post('/api/entry', entries.submit);
app.get('/api/entries/:page?', page(Entry.count, 3), api.entries);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

module.exports = app;
