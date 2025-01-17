// utils/monitorTrades.js
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');
const {
  deleteEntry,
  createEntry,
  readEntries,
} = require('./manageActiveTrade');
const { updateConfigValue, getConfigValue } = require('./config');
const { differentPrc } = require('../backend');
const WebSocketClient = require('websocket').client;
const client = new WebSocketClient();
let ws;
let monitoring = false;
let debounceTimeout;
const DEBOUNCE_INTERVAL = 500;

function startMonitoringTrades() {
  if (monitoring) return; // Avoid starting multiple monitors
  // monitoring = true;
  updateConfigValue('tradeMonitoring', true);

  // ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

  // ws.onmessage = event => {
  //   // Clear the existing debounce timer
  //   if (debounceTimeout) clearTimeout(debounceTimeout);

  //   // Set a new debounce timer
  //   debounceTimeout = setTimeout(() => {
  //     try {
  //       const data = JSON.parse(event.data);
  //       const livePrice = parseFloat(data.p);
  //       console.log(livePrice);
  //       // Read active trades
  //       const trades = readEntries('activeTrade');
  //       const pandingTrades = readEntries('pandingTrade');
  //       if (
  //         (!Array.isArray(trades) || trades.length === 0) &&
  //         (!Array.isArray(pandingTrades) || pandingTrades.length === 0)
  //       ) {
  //         console.log('No active trades found. Stopping monitoring...');
  //         stopMonitoringTrades();
  //         return;
  //       }

  //       // Check each trade for targetPrice or stopLoss
  //       trades.forEach((trade, index) => {
  //         if (trade.isShortSell) {
  //           if (livePrice <= trade.targetPrice) {
  //             deleteEntry(trade.uniqId, 'activeTrade');
  //             createEntry(
  //               {
  //                 ...trade,
  //                 profit: livePrice - trade.entryPrice,
  //                 exitPrice: livePrice,
  //                 exitPrc: differentPrc(trade.entryPrice, livePrice),
  //               },
  //               'closedTrade',
  //             );
  //             createEntry(trade, 'pandingTrade');
  //             console.log(
  //               `target price reached  ${
  //                 trade.isShortSell ? 'short sell' : 'Normal'
  //               }`,
  //               livePrice - trade.entryPrice,
  //             );
  //           } else if (livePrice >= trade.stopLoss) {
  //             deleteEntry(trade.uniqId, 'activeTrade');
  //             createEntry(
  //               {
  //                 ...trade,
  //                 loss: trade.entryPrice - livePrice,
  //                 exitPrice: livePrice,
  //                 exitPrc: differentPrc(trade.entryPrice, livePrice),
  //               },
  //               'closedTrade',
  //             );
  //             createEntry(trade, 'pandingTrade');
  //             console.log(
  //               `stop loss reached in ${
  //                 trade.isShortSell ? 'short sell' : 'Normal'
  //               }`,
  //               trade.entryPrice - livePrice,
  //             );
  //           }
  //         } else {
  //           if (livePrice >= trade.targetPrice) {
  //             deleteEntry(trade.uniqId, 'activeTrade');
  //             createEntry(
  //               {
  //                 ...trade,
  //                 profit: livePrice - trade.entryPrice,
  //                 exitPrice: livePrice,
  //                 exitPrc: differentPrc(trade.entryPrice, livePrice),
  //               },
  //               'closedTrade',
  //             );
  //             createEntry(trade, 'pandingTrade');
  //             console.log(
  //               `target price reached  ${
  //                 trade.isShortSell ? 'short sell' : 'Normal'
  //               }`,
  //               livePrice - trade.entryPrice,
  //             );
  //           } else if (livePrice <= trade.stopLoss) {
  //             deleteEntry(trade.uniqId, 'activeTrade');
  //             createEntry(
  //               {
  //                 ...trade,
  //                 loss: trade.entryPrice - livePrice,
  //                 exitPrice: livePrice,
  //                 exitPrc: differentPrc(trade.entryPrice, livePrice),
  //               },
  //               'closedTrade',
  //             );
  //             createEntry(trade, 'pandingTrade');
  //             console.log(
  //               `stop loss reached in ${
  //                 trade.isShortSell ? 'short sell' : 'Normal'
  //               }`,
  //               trade.entryPrice - livePrice,
  //             );
  //           }
  //         }
  //       });
  //       console.log(livePrice);
  //       // Check each panding trade to be active
  //       pandingTrades.forEach((p_trade, index) => {
  //         if (p_trade.isShortSell) {
  //           if (
  //             // parseInt(p_trade.entryPrice) - 2 <
  //             // parseInt(livePrice) &&
  //             parseInt(livePrice) < parseInt(p_trade.entryPrice)
  //           ) {
  //             deleteEntry(p_trade.uniqId, 'pandingTrade');
  //             createEntry(
  //               { ...p_trade, actualEntryPrice: livePrice },
  //               'activeTrade',
  //             );
  //             console.log(
  //               'Short sell Trade active',
  //               `${parseInt(p_trade.entryPrice) - 2} < ${parseInt(
  //                 livePrice,
  //               )} < ${parseInt(p_trade.entryPrice)}`,
  //             );
  //           }
  //         } else {
  //           if (
  //             parseInt(p_trade.entryPrice) < parseInt(livePrice)
  //             // && parseInt(livePrice) <
  //             // parseInt(p_trade.entryPrice) + 2
  //           ) {
  //             deleteEntry(p_trade.uniqId, 'pandingTrade');
  //             createEntry(
  //               { ...p_trade, actualEntryPrice: livePrice },
  //               'activeTrade',
  //             );
  //             console.log(
  //               'Normal Trade active',
  //               `${parseInt(p_trade.entryPrice)} < ${parseInt(livePrice)} < ${
  //                 parseInt(p_trade.entryPrice) + 2
  //               }`,
  //             );
  //           }
  //         }
  //       });
  //     } catch (error) {
  //       console.error('Error processing WebSocket message:', error);
  //     }
  //   }, DEBOUNCE_INTERVAL); // Wait for the debounce interval before executing
  // };

  // ws.onclose = () => {
  //   console.log('WebSocket closed. Stopping monitoring...');
  //   // monitoring = false;
  //   updateConfigValue('tradeMonitoring', false);
  // };

  // ws.onerror = error => {
  //   console.error('WebSocket error:', error);
  //   // monitoring = false;
  //   updateConfigValue('tradeMonitoring', false);
  // };

  console.log('Started monitoring trades...');

  client.on('connect', connection => {
    console.log('Connected to Binance WebSocket');

    connection.on('message', message => {
      if (message.type === 'utf8') {
        // Clear the existing debounce timer
        if (debounceTimeout) clearTimeout(debounceTimeout);

        // Set a new debounce timer
        debounceTimeout = setTimeout(() => {
          try {
            const tradeData = JSON.parse(message.utf8Data);
            const livePrice = parseFloat(tradeData.p); // Extract price
            // Read active trades
            const trades = readEntries('activeTrade');
            const pandingTrades = readEntries('pandingTrade');
            if (
              (!Array.isArray(trades) || trades.length === 0) &&
              (!Array.isArray(pandingTrades) || pandingTrades.length === 0)
            ) {
              console.log('No active trades found. Stopping monitoring...');
              stopMonitoringTrades();
              return;
            }

            // Check each trade for targetPrice or stopLoss
            trades.forEach((trade, index) => {
              if (trade.isShortSell) {
                if (livePrice <= trade.targetPrice) {
                  deleteEntry(trade.uniqId, 'activeTrade');
                  createEntry(
                    {
                      ...trade,
                      profit: livePrice - trade.entryPrice,
                      exitPrice: livePrice,
                      exitPrc: differentPrc(trade.entryPrice, livePrice),
                    },
                    'closedTrade',
                  );
                  createEntry(trade, 'pandingTrade');
                  console.log(
                    `target price reached  ${
                      trade.isShortSell ? 'short sell' : 'Normal'
                    }`,
                    livePrice - trade.entryPrice,
                  );
                } else if (livePrice >= trade.stopLoss) {
                  deleteEntry(trade.uniqId, 'activeTrade');
                  createEntry(
                    {
                      ...trade,
                      loss: trade.entryPrice - livePrice,
                      exitPrice: livePrice,
                      exitPrc: differentPrc(trade.entryPrice, livePrice),
                    },
                    'closedTrade',
                  );
                  createEntry(trade, 'pandingTrade');
                  console.log(
                    `stop loss reached in ${
                      trade.isShortSell ? 'short sell' : 'Normal'
                    }`,
                    trade.entryPrice - livePrice,
                  );
                }
              } else {
                if (livePrice >= trade.targetPrice) {
                  deleteEntry(trade.uniqId, 'activeTrade');
                  createEntry(
                    {
                      ...trade,
                      profit: livePrice - trade.entryPrice,
                      exitPrice: livePrice,
                      exitPrc: differentPrc(trade.entryPrice, livePrice),
                    },
                    'closedTrade',
                  );
                  createEntry(trade, 'pandingTrade');
                  console.log(
                    `target price reached  ${
                      trade.isShortSell ? 'short sell' : 'Normal'
                    }`,
                    livePrice - trade.entryPrice,
                  );
                } else if (livePrice <= trade.stopLoss) {
                  deleteEntry(trade.uniqId, 'activeTrade');
                  createEntry(
                    {
                      ...trade,
                      loss: trade.entryPrice - livePrice,
                      exitPrice: livePrice,
                      exitPrc: differentPrc(trade.entryPrice, livePrice),
                    },
                    'closedTrade',
                  );
                  createEntry(trade, 'pandingTrade');
                  console.log(
                    `stop loss reached in ${
                      trade.isShortSell ? 'short sell' : 'Normal'
                    }`,
                    trade.entryPrice - livePrice,
                  );
                }
              }
            });
            console.log(livePrice);
            // Check each panding trade to be active
            pandingTrades.forEach((p_trade, index) => {
              if (p_trade.isShortSell) {
                if (
                  // parseInt(p_trade.entryPrice) - 2 <
                  // parseInt(livePrice) &&
                  parseInt(livePrice) < parseInt(p_trade.entryPrice)
                ) {
                  deleteEntry(p_trade.uniqId, 'pandingTrade');
                  createEntry(
                    { ...p_trade, actualEntryPrice: livePrice },
                    'activeTrade',
                  );
                  console.log(
                    'Short sell Trade active',
                    `${parseInt(p_trade.entryPrice) - 2} < ${parseInt(
                      livePrice,
                    )} < ${parseInt(p_trade.entryPrice)}`,
                  );
                }
              } else {
                if (
                  parseInt(p_trade.entryPrice) < parseInt(livePrice)
                  // && parseInt(livePrice) <
                  // parseInt(p_trade.entryPrice) + 2
                ) {
                  deleteEntry(p_trade.uniqId, 'pandingTrade');
                  createEntry(
                    { ...p_trade, actualEntryPrice: livePrice },
                    'activeTrade',
                  );
                  console.log(
                    'Normal Trade active',
                    `${parseInt(p_trade.entryPrice)} < ${parseInt(
                      livePrice,
                    )} < ${parseInt(p_trade.entryPrice) + 2}`,
                  );
                }
              }
            });
          } catch (error) {
            console.error('Error processing WebSocket message:', error);
          }
        }, DEBOUNCE_INTERVAL); // Wait for the debounce interval before executing
      }
    });

    connection.on('error', error => {
      updateConfigValue('tradeMonitoring', false);
      console.error('Connection error:', error);
    });

    connection.on('close', () => {
      updateConfigValue('tradeMonitoring', false);
      console.log('Connection closed');
    });
  });

  client.connect('wss://stream.binance.com:9443/ws/btcusdt@trade');
}

function stopMonitoringTrades() {
  if (ws) ws.close();
  monitoring = false;
  updateConfigValue('tradeMonitoring', false);
  console.log('Stopped monitoring trades.');
}

// Watch for changes in activeTrade.json
function watchTradeFile() {
  console.log('enter watchTradeFile');
  // const filePath = path.join(process.cwd(),   'activeTrade.json');

  // fs.watchFile(filePath, (curr, prev) => {
  //   console.log('activeTrade.json updated. Checking trades...');
  //   const trades = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // if (Array.isArray(trades) && trades.length > 0) {
  //   console.log('Active trades found. Starting monitoring...');
  startMonitoringTrades();
  //   } else {
  //     console.log('No active trades found. Stopping monitoring...');
  //     stopMonitoringTrades();
  //   }
  // });
}

module.exports = {
  startMonitoringTrades,
  stopMonitoringTrades,
  watchTradeFile,
};
