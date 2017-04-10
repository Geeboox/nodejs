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




router.post('/', function(req, res) { 	 	 	
	knex('producto').insert([ {'fecha': req.param('p_date'),'linea':req.param('p_line'),
	'codigo':req.param('p_code'),'marca':req.param('p_brand'),'descripcion':req.param('p_description'),
	'n_comercial':req.param('p_name'),'imagen':req.param('p_img')} ]) 	
	.then (function(result) { 		 		
		
		knex.select().from('producto').orderBy('id_producto', 'asc')
		.then(function(result){                 
			res.render('product/product_list',{                         
			producto: result                 
			});         
		});		
	});  	



});
     

module.exports = router;
