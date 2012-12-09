var mongoose = require('mongoose');

var catalogSchema = mongoose.Schema({
	name : {
		type : String,
		Defalut : '未归档'
	}
});