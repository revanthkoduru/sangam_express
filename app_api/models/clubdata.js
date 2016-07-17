var mongoose = require('mongoose');

var aboutSchema = new mongoose.Schema({
	head:{type:String},
	mid_text:{type:String, required: true},
	conc: {type:String}
});

var contactSchema = new mongoose.Schema({
	conc_num : {type: String, required: true},
	email: {type: String, required: true}
});

var convSchema = new mongoose.Schema({
	name: {type: String, required: true},
	position: {type: String, required: true},
	contact_info : contactSchema,
});

var clubdataSchema = new mongoose.Schema({
	_id: {type: String, required: true},
	about :aboutSchema,
	conv_details : [convSchema],

});

mongoose.model('clubdata', clubdataSchema,'clubdata');