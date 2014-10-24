var net = require('net');

function zeroFill(str){
    if(str.length < 2)
	str = "0" + str;
    return str;
}

function getTime(){
    var date = new Date(),
	YYYY = date.getFullYear(),
	MM = zeroFill((date.getMonth() + 1)),
	DD = zeroFill(date.getDate()),
	hh = zeroFill(date.getHours()),
	mm = zeroFill(date.getMinutes());

    return YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm;
}

var server = net.createServer(function(socket){
    socket.write(getTime());
    socket.write();
    socket.end();
});

server.listen(process.argv[2]);

// var net = require('net');

// function zeroFill(i) {
//     return (i < 10 ? '0' : '') + i;
// }

// function now () {
//     var d = new Date();
//     return d.getFullYear() + '-'
//         + zeroFill(d.getMonth() + 1) + '-'
//         + zeroFill(d.getDate()) + ' '
//         + zeroFill(d.getHours()) + ':'
//         + zeroFill(d.getMinutes());
// }

// var server = net.createServer(function (socket) {
//     socket.end(now() + '\n');
// });

// server.listen(Number(process.argv[2]));
