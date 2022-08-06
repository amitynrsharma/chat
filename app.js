var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');



var app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

var sessionMiddleware = session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
});


io.use(function(socket, next) {
    sessionMiddleware(socket.request, socket.request.res, next);
});

app.use(sessionMiddleware);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
require('./routes/index')(app, io);
// var usersRouter = require('./routes/users');

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


server.listen(3500, (err) => {
    console.log("server running on localhost:3500");
})