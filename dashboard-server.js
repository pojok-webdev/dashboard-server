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
app.get('/bts',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	btsquery = queries.bts;
	con.salesdata(btsquery,function(out){
		console.log("BTS",out);
		res.send(out);
	});
});
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


app.get('/surveydaily',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	surveyquery = queries.surveydaily;
	con.salesdata(surveyquery,function(out){
		console.log("survey daily",out);
		res.send(out);
	});
});
app.get('/surveyweekly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	surveyquery = queries.surveyweekly;
	con.salesdata(surveyquery,function(out){
		console.log("survey weekly",out);
		res.send(out);
	});
});
app.get('/surveymonthly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	surveyquery = queries.surveymonthly;
	con.salesdata(surveyquery,function(out){
		console.log("survey monthly",out);
		res.send(out);
	});
});
app.get('/surveyquarterly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	surveyquery = queries.surveyquarterly;
	con.salesdata(surveyquery,function(out){
		console.log("survey quarterly",out);
		res.send(out);
	});
});
app.get('/surveyyearly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	surveyquery = queries.surveyyearly;
	con.salesdata(surveyquery,function(out){
		console.log("survey yearly",out);
		res.send(out);
	});
});





app.get('/installdaily',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	installquery = queries.installdaily;
	con.salesdata(installquery,function(out){
		console.log("install daily",out);
		res.send(out);
	});
});
app.get('/installweekly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	installquery = queries.installweekly;
	con.salesdata(installquery,function(out){
		console.log("install weekly",out);
		res.send(out);
	});
});
app.get('/installmonthly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	installquery = queries.installmonthly;
	con.salesdata(installquery,function(out){
		console.log("install monthly",out);
		res.send(out);
	});
});
app.get('/installquarterly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	installquery = queries.installquarterly;
	con.salesdata(installquery,function(out){
		console.log("install quarterly",out);
		res.send(out);
	});
});
app.get('/installyearly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	installquery = queries.installyearly;
	con.salesdata(installquery,function(out){
		console.log("install yearly",out);
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
