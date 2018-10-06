var http = require('http'); 
var dt = require('./datetimemodule');
var url = require('url');

http.createServer(function(req, res) {
	var q = url.parse(req.url, true).query;
	
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	
	res.end(dt.dateTimeModule(q.year, q.month, q.day, q.hour, q.minute));
	
}).listen(8080);