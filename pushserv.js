var io = require('socket.io').listen(80);

io.sockets.on('connection', function (socket) {
    socket.emit('log', 'server ok');
    socket.on('message', function(data) {
        socket.emit('log', data);
        console.log('message', data);
    });
});
