var http = require('http'); 
var date = require('./datetimemodule');
var url = require('url');

http.createServer(function(req, res) {
	var query = url.parse(req.url, true).query;
	
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	
	res.end(date.dateTimeModule(query.year, query.month, query.day, 
		query.hour, query.minute));
	
}).listen(8080);