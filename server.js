var http = require('http');
var server = http.createServer(function (request, response) {
	console.log("HTTP works!");
});
server.listen(8080);
console.log('Server is listened');