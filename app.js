
/**
 * Module dependencies.
 */

var express = require('express')
  , ejs = require('ejs')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
 
  

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.engine('html', require('ejs').renderFile);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


module.exports = app;
 
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var mongoose = require('mongoose')
  , db = mongoose.createConnection('localhost','codeT');//DB connect.

db.on('error',console.error.bind(console,'连接错误!'));// DB event listener.

db.on('open',function callback(){
   console.log('db connect!');
});

require('./routes').init();


// console.log(require('./Model/indexModel').getModel);