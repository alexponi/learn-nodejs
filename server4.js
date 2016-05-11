var fs = require('fs');
var fileName = "hello.html";

var http = require('http');
var server = http.createServer(function (request, response) {
	console.log("HTTP works!");
	fs.readFile(fileName, "utf8", function(err, data){
		if (err){
			console.log('Could not find or open file for reading\n');
		} else {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.end(data);
		}
	})
});
server.listen(8080);
console.log('Server is listened port:8080');