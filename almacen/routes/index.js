var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ERP' });
});


router.get('/product', (req, res) => {
	res.render('product/product_list') 
});


router.get('/warehouse', (req, res) => {         
	res.render('warehouse/warehouse_list') 
});

router.get('/cost', (req, res) => {         
	res.render('cost/cost_list') 
});

router.get('/stock', (req, res) => {         
	res.render('stock/stock_list') 
});


module.exports = router;
