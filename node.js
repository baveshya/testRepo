var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/', express.static(__dirname ));
// hosts the entire json data set
app.get('/getFormData', function(req, res) {
    fs.readFile(__dirname + "/" + "myDatabase.json", 'utf8', function(err, data) {
        if(err) {
         console.log(err);
         res.status(500).send('There seems to be an error , Please try again');
        }
        else {
          res.end(data);  

        } 
    });
});

// adds entry to the json data set
app.post('/storeFormEntry', function(req, res) {
    fs.readFile(__dirname + "/" + "myDatabase.json", 'utf8', function(err, dataSet) {
        if(err) {
         console.log(err);
         res.status(500).send('There seems to be an error , Please try again');
        }
        else {
          /*var data=req.body.CaseData;
        	Var data=JSON.parse(dataSet);
       		dataSet.employee.push(data);
        	console.log(data);*/
		       fs.writeFile(__dirname + "/" + "myDatabase.json", JSON.stringify(data), 'utf8', function(err) {
		            if (err) console.log(err);
		        });
        	res.end("changes applied");

        } 
    });
});

	var server = app.listen(9002, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Case Submission Portal Live at http://%s:%s", host, port)
})



