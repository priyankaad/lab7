var projects = require('../projects.json');
//var index.Min= require('../min')
/*
 * GET home page.
 */
exports.view = function(req, res){

    /* var randomNum = Math.random();
 	console.log(randomNum);
 	if (randomNum > 0.5) {
 		projects["min"] = false;
 		res.render('index', projects);
 	} else {
 		res.redirect('/min');
 	}
*/
projects['min'] = false;
res.render('index', projects);

 };

 exports.viewMin = function(req, res){
 	projects['min'] = true;
 	 res.render('index', projects);
 };