var app = require('../app');
var indexCtr = require('../Controller/indexController');
var userCtr = require('../Controller/userController');
var articleCtr = require('../Controller/articleController');
var catalogCtr = require('../Controller/catalogController');


exports.init = function(req, res){
 	app.get('/', indexCtr.index);
	app.get('/articlelist', articleCtr.list);
	app.post('/article',articleCtr.createDate);
};