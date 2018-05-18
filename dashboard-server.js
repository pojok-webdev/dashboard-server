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
app.get('/detailsurveydaily',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	detailsurveydaily = queries.detailsurveydaily(1);
	console.log("Query",detailsurveydaily);
	con.salesdata(detailsurveydaily,function(out){
		console.log("detail survey daily",out);
		res.send(out);
	});
});
app.get('/detailsurveyweekly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	detailsurveyweekly = queries.detailsurveyweekly(1);
	console.log("Query",detailsurveyweekly);
	con.salesdata(detailsurveyweekly,function(out){
		console.log("detail survey weekly",out);
		res.send(out);
	});
});
app.get('/detailsurveymonthly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	detailsurveymonthly = queries.detailsurveymonthly(1);
	console.log("Query",detailsurveymonthly);
	con.salesdata(detailsurveymonthly,function(out){
		console.log("detail survey monthly",out);
		res.send(out);
	});
});
app.get('/detailsurveyquarterly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	detailsurveyquarterly = queries.detailsurveyquarterly(1);
	console.log("Query",detailsurveyquarterly);
	con.salesdata(detailsurveyquarterly,function(out){
		console.log("detail survey quarterly",out);
		res.send(out);
	});
});
app.get('/detailsurveyyearly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	detailsurveyyearly = queries.detailsurveyyearly(1);
	console.log("Query",detailsurveyyearly);
	con.salesdata(detailsurveyyearly,function(out){
		console.log("detail survey yearly",out);
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



app.get('/troubleshootdaily',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	troubleshootquery = queries.troubleshootdaily;
	con.salesdata(troubleshootquery,function(out){
		console.log("troubleshoot daily",out);
		res.send(out);
	});
});
app.get('/troubleshootweekly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	troubleshootquery = queries.troubleshootweekly;
	con.salesdata(troubleshootquery,function(out){
		console.log("troubleshoot weekly",out);
		res.send(out);
	});
});
app.get('/troubleshootmonthly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	troubleshootquery = queries.troubleshootmonthly;
	con.salesdata(troubleshootquery,function(out){
		console.log("troubleshoot monthly",out);
		res.send(out);
	});
});
app.get('/troubleshootquarterly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	troubleshootquery = queries.troubleshootquarterly;
	con.salesdata(troubleshootquery,function(out){
		console.log("troubleshoot quarterly",out);
		res.send(out);
	});
});
app.get('/troubleshootyearly',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	troubleshootquery = queries.troubleshootyearly;
	con.salesdata(troubleshootquery,function(out){
		console.log("troubleshoot yearly",out);
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
