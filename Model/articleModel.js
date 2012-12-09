var mongoose = require('mongoose');
var m = require('./indexModel');

var articleSchema = new mongoose.Schema({
	date : {type:Date,default:Date.now},
	code : {
		h	: Number,
		c   : String
	},
	catalog : String
});


var article = m().model('article',articleSchema);

module.exports = article;