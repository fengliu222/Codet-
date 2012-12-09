var app = require('../app');
var model = require('../Model/indexModel');
var artModel = model.getModel('article');

exports.list = function(req,res){
	artModel.find({},function(err,data){
		if(err){
			console.log("err"+err);
		}else{
			//console.log(data);
			res.locals({
				catalog : data[0].catalog,
				codecontent : data[0].code.c,
				codeh : data[0].code.h,
				date : data[0].date
			});

			res.render('articlelist',{site_title:'moe'});
		}
	});
	//res.render('articlelist',{site_title:'moe'});

	//res.render('articlelist',{site_title:'moe'});
}

exports.createDate = function(req,res){
	var tempCode = req.body.code;
	var temph = 1;
	var tempCatalo = req.body.catalog;

	var tempData = new artModel({
		data : new Date(),
		code : {
			h : temph,
			c : tempCode
		},
		catalog : tempCatalo
	});

	tempData.save(function(err){
		if(err) return handleError(err);
		console.log("success!");
	})
}