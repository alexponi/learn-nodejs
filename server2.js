var http = require('http');
var server = http.createServer(function (request, response) {
	console.log("HTTP works!");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.end('<h1>Hello!</h1>');
});
server.listen(8080);
console.log('Server is listened port:8080');