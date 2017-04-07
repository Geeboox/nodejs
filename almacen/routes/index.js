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


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ERP' });
});


module.exports = router;
