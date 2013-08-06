process.env.PWD = process.cwd();

var express = require('express'),
    fs = require('fs');

var app = express.createServer(express.logger());

app.use(express.static(process.env.PWD));

app.get('/', function(request, response) {
  var index = fs.readFileSync('index.html');
  var buf = new Buffer(index);
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});