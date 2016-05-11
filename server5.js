var fs = require('fs');
var fileName = "hello.html";
var http = require('http');
var url = require('url');
var path = require('path');
var mimeTypes = {
	'.js' : 'text/javascript',
	'.html' : 'text/html',
	'.css' : 'text/css',
	'.jpg' : 'image/text',
	'.gif' : 'image/gif'
};
var server = http.createServer(function (request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log('Request ' + pathname);
	console.log("HTTP works!");
	fs.readFile(fileName, "utf8", function(err, data){
		if (err){
			console.log('Could not find or open file for reading\n');
		} else {
			response.writeHead(200, {"Content-Type": mimeTypes[path.extname(pathname)]});
			response.end(data);
		}
	})
});
server.listen(8080);
console.log('Server is listened port:8080');