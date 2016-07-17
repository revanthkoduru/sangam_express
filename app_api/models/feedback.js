var mongoose = require('mongoose');

var feedbackSchema = new mongoose.Schema({
	name : String,
	email_id: String,
	category:{type: String, required: true},
	event:{type: String},
	rating: {type: Number, required: true, min:0, max:5},
	reviewText: {type: String, required: true},
	createdOn: {type: Date, "default": Date.now}
});

mongoose.model('feedback',feedbackSchema,'feedback');