var express = require('express'),

app = express(),
path = require("path"),
url=require('url'),
moment=require("moment"),
queries=require("./js/queries"),
Promise=require("bluebird"),
bodyParser = require('body-parser'),
con = require('./js/connection.js');
app.engine('html', require('ejs').renderFile);
app.set('views',path.join(__dirname,'views'));
app.use(express.static(__dirname+'/views'));
app.locals.moment = moment;
app.locals.dtformat = "dd M YY";
/*app.use(bodyParser.json);*/
app.use(bodyParser.urlencoded({
	extended:true
}));

app.get('/visits',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	salesquery = queries.visits;
	con.salesdata(salesquery,function(out){
		console.log("Sales",out);
		res.send(out);
	});
});
app.get('/offers',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	salesquery = queries.offers;
	con.salesdata(salesquery,function(out){
		console.log("Sales",out);
		res.send(out);
	});

});
app.get('/newfbs',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	salesquery = queries.newfbs;
	con.salesdata(salesquery,function(out){
		console.log("Sales",out);
		res.send(out);
	});
});
app.get('/sellings',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	salesquery = queries.sellings;
	con.salesdata(salesquery,function(out){
		console.log("Sales",out);
		res.send(out);
	});
});
app.get('/ticketdaily',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	ticketquery = queries.ticketdaily;
	con.salesdata(ticketquery,function(out){
		console.log("Ticket daily",out);
		res.send(out);
	});
});
app.get('/ticketweekly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	ticketquery = queries.ticketweekly;
	con.salesdata(ticketquery,function(out){
		console.log("Ticket weekly",out);
		res.send(out);
	});
});
app.get('/ticketmonthly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	ticketquery = queries.ticketmonthly;
	con.salesdata(ticketquery,function(out){
		console.log("Ticket monthly",out);
		res.send(out);
	});
});
app.get('/ticketquarterly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	ticketquery = queries.ticketquarterly;
	con.salesdata(ticketquery,function(out){
		console.log("Ticket quarterly",out);
		res.send(out);
	});
});
app.get('/ticketyearly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	ticketquery = queries.ticketyearly;
	con.salesdata(ticketquery,function(out){
		console.log("Ticket yearly",out);
		res.send(out);
	});
});
app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "GET, POST,PUT");
	next();
  
  });
app.listen(process.env.PORT || 1945);
