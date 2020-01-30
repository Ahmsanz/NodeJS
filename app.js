var http = require ('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.pipe(myWriteStream);

// var server = http.createServer(function(req, res){
//   console.log('request was made: ' + req.url);
//   res.writeHead (200, {'Content-Type': 'text/plain'})
//   res.end('Hey ninjas!');
// });
//
//
// server.listen(3000, '127.0.0.1');
// console.log('listening to port 3000');
