// Collect all urls in a list
var urlList = process.argv.slice(2);
var data = [], responseCount = 0;
var http = require('http');
var concat = require('concat-stream');

urlList.forEach(function(url, index){
    http.get(url, function(req){
	req.setEncoding('utf-8');
	req.pipe(concat(function(res){
	    data[index] = res;
	    responseCount++;
	    if (responseCount == urlList.length) {
		console.log(data.join('\n'));
	    }
	}));
    });
});

// https://github.com/olizilla/nodeschooling/blob/master/learnyounode-answers/09-juggling-async.js
// var http = require('http');
// var concat = require('concat-stream');
// var urls = [];
// var data = [];
// var responseCount = 0;
// process.argv.slice(2).forEach(function (item) {
//     urls.push(item);
// });

// urls.forEach(function (item, index) {
//     http.get(item, function (req) {
// 	req.setEncoding('utf8');
// 	req.pipe(concat(function (res) {
// 	    data[index] = res;
// 	    responseCount++;
// 	    if (responseCount === urls.length) {
// 		console.log(data.join('\n'));
// 	    }
// 	}));
//     });
// });

// NODES RESULT:
// var http = require('http');
// var bl = require('bl');
// var results = [];
// var count = 0;

// function printResults () {
//     for (var i = 0; i < 3; i++)
//         console.log(results[i]);
// }

// function httpGet (index) {
//     http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//             if (err)
// 		return console.error(err);
	    
//             results[index] = data.toString();
//             count++;
	    
//             if (count == 3) // yay! we are the last one!
// 		printResults();
//         }));
//     });
// }

// for (var i = 0; i < 3; i++)
//     httpGet(i);
