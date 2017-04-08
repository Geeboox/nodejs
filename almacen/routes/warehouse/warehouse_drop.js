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
	
	var id_almacen=req.param('id_almacen');
	//console.log(id_almacen);

	knex("almacen").where('id_almacen',id_almacen).del().then(function(result){ 
		knex.select().from('almacen').then(function(result){ 		
			res.render('warehouse/warehouse_list', { 			
				almacen: result 		
			}); 	
		});
	
	});
	
});




module.exports = router;
