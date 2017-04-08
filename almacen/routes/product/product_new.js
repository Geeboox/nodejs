var express = require('express'); 
var router = express.Router();



var knex = require('knex')({ 	
	client : 'pg', 	connection : {
	host : 'localhost', 		 		
	port : '5432', 		 		
	user : 'hadas', 		 		
	password : 'hadas2017', 		 		
	database : 'hadas' 
	}

});

router.get('/', function(req, res) { 	res.render('product/product_form'); });

module.exports = router;
