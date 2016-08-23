var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + "/client"))

require(__dirname + '/server/config/mongoose');
require(__dirname + '/server/config/routes')(app);



app.listen(1500, function(){
	console.log('Gotta Catch Em all...')
})