var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var moment = require('moment');


var routes = require('./routes/index');
var users = require('./routes/users');
var warehouse_list = require('./routes/warehouse/warehouse_list');
var warehouse_new = require('./routes/warehouse/warehouse_new');
var warehouse_add = require('./routes/warehouse/warehouse_add');
var warehouse_delete = require('./routes/warehouse/warehouse_delete');
var warehouse_drop = require('./routes/warehouse/warehouse_drop');
var warehouse_edit = require('./routes/warehouse/warehouse_edit');
var warehouse_update = require('./routes/warehouse/warehouse_update');
var product_list = require('./routes/product/product_list');
var product_new = require('./routes/product/product_new');
var product_add = require('./routes/product/product_add');


//var cost_list = require('./routes/cost/cost_list');
//var stock_list = require('./routes/stock/stock_list');
var prueba = require('./routes/prueba');

var app = express();


app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/warehouse/warehouse_list',warehouse_list);
app.use('/warehouse/warehouse_new',warehouse_new);
app.use('/warehouse/warehouse_add',warehouse_add);
app.use('/warehouse/warehouse_delete',warehouse_delete);
app.use('/warehouse/warehouse_drop',warehouse_drop);
app.use('/warehouse/warehouse_edit',warehouse_edit);
app.use('/warehouse/warehouse_update',warehouse_update);
app.use('/product/product_list',product_list);
app.use('/product/product_new',product_new);
app.use('/product/product_add',product_add);

//app.use('/cost/cost_list',cost_list);
//app.use('/stock/stock_list',stock_list);
app.use('/prueba', prueba);


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


var knex = require('knex')({ 	
	client : 'pg', 	connection : { 		
		host : 'localhost', 		
		port : '5432', 		
		user : 'hadas', 		
		password : 'hadas2017', 		
		database : 'hadas' 	
}  
});


app.locals.moment = require('moment');


module.exports = app;
