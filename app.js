var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./app_api/models/db');
var uglifyJs = require("uglify-js");
var fs = require('fs');


var app = express();
var routesApi = require('./app_api/routes/index');

// view engine setup
app.set('view engine', 'jade');
var appClientFile = [
    'app_client/app.js',
    'app_client/common/services/eventData.service.js',
    'app_client/common/services/clubData.service.js',
    'app_client/common/services/feedback.service.js',
    'app_client/home/home.controller.js',
    'app_client/events/events.controller.js',
    'app_client/events/eventdetail/eventDetail.controller.js',
    'app_client/calendar/calendar.controller.js',
    'app_client/gallery/gallery.controller.js',
    'app_client/clubdetail/clubdetail.controller.js',
    'app_client/common/directives/feedback-form/feedback-form.directive.js',
    'app_client/common/directives/navigation/navigation.directive.js',
];
var uglified = uglifyJs.minify(appClientFile,{compress:false});

fs.writeFile('public/angular/sangam.min.js',uglified.code,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Script generated and saved: sangam.min.js")
    }
});

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));
app.use('/api',routesApi);
app.use(function(req,res){
    res.sendfile(path.join(__dirname,'app_client','index.html'));
});

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
