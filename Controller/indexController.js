var app = require('../app');
var model = require('../Model/indexModel');


exports.index = function(req, res){
	var scriptImportStr = '';
	res.render('index.ejs',{site_title:"a"});
};