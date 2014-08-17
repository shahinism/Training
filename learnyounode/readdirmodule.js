var fs = require('fs'),
path = require('path');

module.exports = function(directory, extension, callback){
    fs.readdir(directory, function(err, content){
	if(err)
	    return callback(err);
	var result = content.filter(function(file){
	    return path.extname(file) === '.' + extension;
	})
	callback(null, result)
    })
}
