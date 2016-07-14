var express = require('express');
var server = express();

server.get('/', function (req, res) {
  //res.send('Hello Express!');
  res.sendfile('index.html');
});

server.listen(3000, function () {
  console.log('Sample app listening on port 3000!');
  console.log('http://localhost:3000/');
});
