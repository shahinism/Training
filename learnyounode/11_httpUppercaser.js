var map = require('through2-map');
var http = require('http');

var server = http.createServer(function(req, res){
    if (req.method != 'POST') {
	res.end();
	console.log('Ignoring %s request. POST only.', req.method);
    }

    req.setEncoding('utf-8');
    req.pipe(map(toUpper)).pipe(res);
});

function toUpper(chunk){
    return chunk.toString().toUpperCase();
}

server.listen(process.argv[2]);

