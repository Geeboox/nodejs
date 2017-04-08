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
	var id_almacen = req.param('id_almacen');
	knex.select('nombre','direccion').from('almacen').orderBy('id_almacen', 'asc').where('id_almacen',id_almacen).then(function(result){ 		
		res.render('warehouse/warehouse_edit', { 			
			id_almacen: id_almacen,			
			almacen:result		
		}); 	
	});	

});




module.exports = router;
