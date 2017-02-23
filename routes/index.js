var projects = require('../projects.json');

/*
 * GET home page.
 */
exports.view = function(req, res){

 	var randomNum = Math.random();
 	console.log(randomNum);
 	if (randomNum > 0.5) {
 		projects['grid'] = false;
 		res.render('index', projects);
 	} else {
 		res.redirect('/grid');
 	}
 };

 exports.viewGrid = function(req, res){
 	projects["grid"] = true;
 	res.render('index', projects);
 };