var app = require('../app');
var available = false;
var modellist = ['catalog','user','article']; // Model list.When the model have some change , that array also should be changed.
var modelExist = false;

exports=module.exports= function(){
	
	var mongoose = require('mongoose')
	  , db = mongoose.createConnection('localhost','codeT');//DB connect.
	db.on('error',console.error.bind(console,'连接错误!'));// DB event listener.

	db.on('open',function callback(){
		 console.log('db connect!');
	});

	return db;
}

	  
function init(curModel){
	console.log(curModel+'Model');
	for(var i = 0;i < modellist.length;i++){
	 	if(curModel == modellist[i])	return require('./'+curModel+'Model');
	}
	return false;
}

//调用Model的统一入口，参数为模型的名称，返回值为该模型。
exports.getModel = function(mname,param){
	if(mname){
		return init(mname);
	}
}