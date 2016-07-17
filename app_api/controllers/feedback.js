var mongoose = require('mongoose');
var feedback = mongoose.model('feedback');

module.exports.addFeedback = function(req,res){
	feedback.create({
		name: req.body.name,
		email_id: req.body.email,
		category: req.body.category,
		event: req.body.event,
		rating: req.body.rating,
		reviewText: req.body.review
	},function(err,location){
		if(err) {
			sendJsonResponse(res,400,err);
		}else {
			sendJsonResponse(res, 201, location);
		}
	});
}

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
}