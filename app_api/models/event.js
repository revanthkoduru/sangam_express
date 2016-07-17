var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
	name: {type: String, required: true},
	venue: {type: String, required: true},
	date: {type: Date, required: true},
	status: {type: Boolean, required: true},
	category: {type: String, required: true},
	description: {type:String, required: true}
});

mongoose.model('Event', eventSchema,'events');