var fs = require('fs');

fs.readdir(process.argv[2], function(err, list){
    if(~err){
	var filtered = list.filter(function(item){
	    return(item.toString().match('.' + process.argv[3] + '$'));
	});
	filtered.forEach(function(a){console.log(a)});
    }
});

// Answer using path method
// var fs = require('fs');
// var path = require('path');

// fs.readdir(process.argv[2], function (err, list) {
//     list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3])
//             console.log(file);
//     });
// });

