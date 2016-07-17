var mongoose = require('mongoose');
var eve = mongoose.model('Event');

module.exports.eventsList = function(req,res){
	eve.find({})
		.exec(function(err,event){
		 	if(!event) {
		 		sendJsonResponse(res,404,{"message":"event not found"});
		 	}else if(err){
		 		sendJsonResponse(res,404,err);
		 	}else {
		 		sendJsonResponse(res,200,event);
		 	}
		});
};
module.exports.eventById = function(req,res){
	if(req.params && req.params.eventid){ 
		eve.findById(req.params.eventid)
		 	.exec(function(err,event){
		 		if(!event) {
		 			sendJsonResponse(res,404,{"message":"event not found"});
		 		}else if(err){
		 			sendJsonResponse(res,404,err);
		 		}else {
		 			sendJsonResponse(res,200,event);
		 		}
		 	});
	}else {
		sendJsonResponse(res,404,{"message": "no event id in request"});
	}
};

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};