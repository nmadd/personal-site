var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var router = require('./router/router.js');
var ROOT = __dirname.slice(0,-7);
// var APIrouter = require('./dist/backend/api/api.js')

//Bodyparser setup
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Static directories/files
app.use(express.static(ROOT + "/node_modules/"));
app.use('/public/', express.static(ROOT + "/browser/public/"));

app.use('/', router);
// app.use('/api/', APIrouter);


app.listen(2727, function() {
    console.log("Listening on port 2727");
});
