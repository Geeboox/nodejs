var express = require('express'); 
var router = express.Router(); 
var knex = require('knex')({ 
	client : 'pg',  connection : {         
	host : 'localhost',         
	port : '5432',         
	user : 'hadas',         
	password : 'hadas2017',         
	database : 'hadas' 
	} 
});  

router.post('/', function(req, res) {          
var id_producto = req.param('id_producto');         
//console.log(id_producto);          
	res.render('product/product_delete',{                  
		id_producto: id_producto                 
	}); 
}); 
module.exports = router;
