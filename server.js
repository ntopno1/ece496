var express = require('express'); //import express library
var app = express();

app.use(express.static(__dirname + '/public')); //dirname : current local directory where node.js is running
app.use(express.bodyParser());

// GET
// sends data to UI
app.get("/serviceClients", function(req, res){
	var serviceClients = ["test1", "test2", "test3"];
	res.json(serviceClients);
});

app.post("/serviceClients", function(req, res){
	var svc = req.body;
	console.log(svc);
});


app.listen(3000);

