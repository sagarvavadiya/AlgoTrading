const { updateConfigValue, getConfigValue } = require('./config');
const { createEntry, readEntries, watchFile, getFilePath, emitTradeRecord,  emitInitialTradeRecord, blankEntry, deleteEntry } = require('./manageActiveTrade');
const { watchTradeFile } = require('./monitorTrades');
const { v4: uuidv4 } = require('uuid');
// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const fs = require('fs');
const path = require('path');
const { differentPrc, currentTime } = require('../backend');


function manageSocket(io) {
  emitTradeRecord(`activeTrade`,`activeTradeUpdated`,io)
  emitTradeRecord(`pandingTrade`,`pandingTradeUpdated`,io)
  emitTradeRecord(`closedTrade`,`closedTradeUpdated`,io)
  io.on('connection', socket => {
    console.log('A user connected');
    const current_time = currentTime()

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
      // createEntry(obj, 'activeTrade');
      // const trades = readEntries('activeTrades');
      console.log('Message received:', data);
      io.emit('messageToAll', data.data);
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
    socket.on('getInitialData', data => {
      console.log('getInitialData',data)
      // io.in(data.senderID).emit('getInitialData', data.data);
      emitInitialTradeRecord(`activeTrade`,`activeTradeUpdated`,io,data.senderID)
      emitInitialTradeRecord(`pandingTrade`,`pandingTradeUpdated`,io,data.senderID)
      emitInitialTradeRecord(`closedTrade`,`closedTradeUpdated`,io,data.senderID)
    });
    socket.on('resetFiles', data => {
      console.log('resetFiles',data)
      blankEntry(`activeTrade`  )
      blankEntry(`pandingTrade` )
      blankEntry(`closedTrade` )
    });
    socket.on('closeTrades', data => {
      console.log('closeTrades',data)
      io.in(data.senderID).emit('closeTrades', data.data);
      deleteEntry(data.data.uniqId, 'activeTrade');
      // here liveprice get from frontend side
      const {isShortSell,livePrice,entryPrice,actualEntryPrice,entryAt} = data?.data ||{}
      const realEntry =  actualEntryPrice ||  entryPrice
      if (isShortSell) {
        createEntry(
        {
          ...data.data,
          profit:livePrice - realEntry,
          exitPrice: livePrice,
          entryAt:entryAt,
          exitAt:current_time,
          exitPrc: differentPrc(realEntry, livePrice),
          appliedCondition:`Close trade by short sell with profit of: livePrice${livePrice} - realEntry${realEntry} : ${ livePrice - realEntry}`
        },
        'closedTrade',
      );
      }else{
        createEntry(
          {
            ...data.data,
            profit:livePrice - realEntry,
            exitPrice: livePrice,
            entryAt:entryAt,
            exitAt:current_time,
            exitPrc: differentPrc(realEntry, livePrice),
            appliedCondition:`Close trade by noraml trade with profit of: livePrice${livePrice} - realEntry${realEntry} : ${ livePrice - realEntry}`
          },
          'closedTrade',
        );
      }

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
