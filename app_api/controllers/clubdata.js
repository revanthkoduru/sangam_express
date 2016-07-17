var mongoose = require('mongoose');
var club = mongoose.model('clubdata');

module.exports.clubdataById = function(req,res){
	if(req.params && req.params.clubname){ 
		club.findById(req.params.clubname)
		 	.exec(function(err,clubdata){
		 		if(!clubdata) {
		 			sendJsonResponse(res,404,{"message":"club not found"});
		 		}else if(err){
		 			sendJsonResponse(res,404,err);
				}else {
		 			sendJsonResponse(res,200,clubdata);
		 		}
		 	});
	}else {
		sendJsonResponse(res,404,{"message": "no club id in request"});
	}
};

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
}