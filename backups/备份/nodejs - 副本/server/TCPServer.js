var net = require('net');

var server = net.createServer(function(socket)
{
    socket.write('Echo server\r\n');
    socket.pipe(socket);
});

server.listen(8888, '127.0.0.1');

console.log('TCP Server running at 127.0.0.1:8888');
