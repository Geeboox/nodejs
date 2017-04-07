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
		knex.select('id_almacen','nombre','direccion').from('almacen').then(function(result){
		res.render('warehouse/warehouse_list',{
			almacen: result
		});

		});
});



router.get('/warehouse_form', (req, res) => {         
	res.render('warehouse/warehouse_list') 
});




module.exports = router;
