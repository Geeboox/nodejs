var express = require('express');
var router = express.Router();
var moment = require('moment');  

var knex = require('knex')({ 	
	client : 'pg', 	connection : { 		
	host : 'localhost', 		
	port : '5432', 		
	user : 'hadas', 		
	password : 'hadas2017', 		
	database : 'hadas' 	} 
});



router.post('/', function(req, res) {                 
	knex.select('id_producto','fecha','linea','codigo','marca','descripcion','n_comercial','imagen')
	.from('producto').then(function(result){                 		
		res.render('product/product_list',{                         
			producto: result                 
		});                 
	//console.log(result);                 
	}); 
});



module.exports = router;
