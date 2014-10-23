var http = require('http');

var options = {
    hostname : process.argv[2],
    method : 'GET'
};

var info = [];

var req = http.get(process.argv[2], function(res){
    res.on("data", function(chunk){
	info.push(chunk);
    });

    res.on("end", function(chunk){
	var datas = info.join("");
	console.log(datas.length);
	console.log(datas);
    });
});


