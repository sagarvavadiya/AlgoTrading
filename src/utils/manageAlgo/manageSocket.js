const { updateConfigValue, getConfigValue } = require('./config');
const { createEntry, readEntries, watchFile, getFilePath, emitTradeRecord } = require('./manageActiveTrade');
const { watchTradeFile } = require('./monitorTrades');
const { v4: uuidv4 } = require('uuid');
// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const fs = require('fs');
const path = require('path');



function manageSocket(io) {
  emitTradeRecord(`activeTrade`,`activeTradeUpdated`,io)
  emitTradeRecord(`pandingTrade`,`pandingTradeUpdated`,io)
  emitTradeRecord(`closedTrade`,`closedTradeUpdated`,io)
  io.on('connection', socket => {
    console.log('A user connected');

    // Functionality for send message to all user
    socket.on('messageToAll', data => {
      const obj = {
        uniqId: '1',
        isShortSell: false,
        entryPrice: 99017.04,
        quantity: 1,
        stopLoss: 99016.941,
        targetPrice: 100007.2104,
        loss: 3.959999999991851,
      };
      createEntry(obj, 'activeTrade');
      const trades = readEntries('activeTrades');
      console.log('Message received:', trades);
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
      if (data.data && data.data.length > 0) {
        for (let i = 0; i < data.data.length; i++) {
          createEntry(data.data[i], 'pandingTrade');
        }
      }
      // createEntry(data.data,'pandingTrade');
      let isMonitoring = getConfigValue('tradeMonitoring');
      console.log({ isMonitoring });
      watchTradeFile();
      console.log('Message received:', data.senderID);
      io.in(data.senderID).emit('onAddAlgo', data.data);
    });

    // Emiit after disconnect
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
}
module.exports = { manageSocket };
