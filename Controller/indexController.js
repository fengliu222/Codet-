var app = require('../app');
var model = require('../Model/indexModel');


exports.index = function(req, res){
	 res.render('header.ejs',{site_title:"moe"});
};