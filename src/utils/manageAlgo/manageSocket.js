const { createEntry } = require("./manageActiveTrade");

function manageSocket(io) {
  io.on('connection', socket => {
    console.log('A user connected');

    // Functionality for send message to all user
    socket.on('messageToAll', data => {
      console.log('Message received:', data);
      io.emit('messageToAll', data);
    });

    // Functionality for send message to only room member
    socket.on('login', roomId => {
      socket.join(roomId);
      io.in(roomId).emit('user_connected', {
        Id: `${roomId}`,
        message: 'You successfully connected',
      });
    });

    socket.on('messageToRoomMember', data => {
      console.log('Message received:', data.senderID);
      io.in(data.senderID).emit('messageToRoomMember', data.data);
    });
    socket.on('onAddAlgo', data => {
      createEntry(data.data,'../activeTrade');
      console.log('Message received:', data.senderID);
      io.in(data.senderID).emit('onAddAlgo', data.data);
    });

    // Emiit after disconnect
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
}
module.exports = {  manageSocket };
