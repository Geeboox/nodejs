var express = require('express'); 
var router = express.Router(); 
var knex = require('knex')({ client : 'pg',  
	connection : {         
		host : 'localhost',         
		port : '5432',         
		user : 'hadas',         
		password : 'hadas2017',         
		database : 'hadas' 
	} 
});  

router.post('/', function(req, res) {         
	var id_producto = req.param('id_producto');         
	knex.select().from('producto').orderBy('id_producto', 'asc').where('id_producto',id_producto)
	.then(function(result){                 
		res.render('product/product_edit', {                         
			id_producto: id_producto,                         
			producto:result                 
		});         
	}); 
}); 

module.exports = router;
