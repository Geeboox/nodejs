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
		knex.select().from('almacen').orderBy('id_almacen', 'asc').then(function(result){
		res.render('warehouse/warehouse_list',{
			almacen: result
		});

		});
});



router.get('/warehouse_form', (req, res) => {         
	res.render('warehouse/warehouse_list') 
});




module.exports = router;
