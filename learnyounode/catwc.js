var fs = require("fs");

var content_buffer = fs.readFileSync(process.argv[2]),
string = content_buffer.toString(),
array = string.split('\n');

console.log(array.length - 1);
