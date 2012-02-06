var io = require('socket.io').listen(1337);

io.sockets.on('connection', function (socket) {
    socket.on('message', function(data) {
        socket.broadcast.emit('push', data);
        console.log('message', data);
    });
});
