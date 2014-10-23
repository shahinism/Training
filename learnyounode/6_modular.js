var filterdir = require('./6_makeItModular_module');

filterdir(process.argv[2], process.argv[3], function(err, data){
    if(err){
	return console.err("There was an error: ", err);
    }
    data.forEach(function(item){
	console.log(item);
    });
});
