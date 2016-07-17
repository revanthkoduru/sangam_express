var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost:27017/sangam-db';
if (process.env.NODE_ENV === 'production') {
	dbURI = 'mongodb://';
}

mongoose.connect(dbURI);
/*print the console messages depending on the nature of connection*/
mongoose.connection.on('connected',function(){
	console.log('Mongoose connected to '+ dbURI);
});
mongoose.connection.on('error',function(err){
	console.log('Mongoose connection error: '+ err);
});
mongoose.connection.on('disconnected',function(){
	console.log('Mongoose disconnected');
});

/*to disconnect mongoose when the app is terminated*/
var gracefulShutdown = function(msg,callback){
	mongoose.connection.close(function(){
		console.log('Mongoose is disconnected since '+ msg);
		callback();
	});
};

process.once('SIGUSR2',function(){
	gracefulShutdown('nodemon restart', function(){
		process.kill(process.pid,'SIGUSR2');
	});
});
process.on('SIGINT', function(){
	gracefulShutdown('app termination', function(){
		process.exit(0);
	});
});
require('./feedback');
require('./event');
require('./clubdata');