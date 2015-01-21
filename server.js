var express = require('express'); //import express library
var mongojs = require('mongojs'); //Mongojs database
var db = mongojs("ece496", ["serviceClients"]); //name of the db = ece496


var app = express();




app.use(express.static(__dirname + '/public')); //dirname : current local directory where node.js is running
app.use(express.bodyParser());

// GET
// sends data to UI
app.get("/serviceClients", function(req, res){
	db.serviceClients.find(function(err,docs){
		res.json(docs);
	});
});

app.post("/serviceClients", function(req, res){
	var svc = req.body;
	console.log(svc);
	
	db.serviceClients.insert(req.body, function(err, doc){
		res.json(doc);
	}); // maps to var db = mongojs("ece496", ["serviceClients"])
});

app.delete("/serviceClients/:id", function (req,res){
	var id= req.params.id;
	console.log(id);
	db.serviceClients.remove({_id : mongojs.ObjectId(id)},
		function(err,doc){
			res.json(doc);
		}
	)
});

app.listen(3000);

