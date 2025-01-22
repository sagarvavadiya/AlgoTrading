// utils/monitorTrades.js
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
              //  condition for shortsell
              const realEntry = trade?.actualEntryPrice || trade?.entryPrice
              if (trade.isShortSell) {
                if (livePrice <= trade.targetPrice) {
                  deleteEntry(trade.uniqId, 'activeTrade');
                  createEntry(
                    {
                      ...trade,
                      profit: livePrice - realEntry,
                      exitPrice: livePrice,
                      exitPrc: differentPrc(realEntry, livePrice),
                      appliedCondition:`Target reached in short sell: livePrice${livePrice} <= trade.targetPrice${trade.targetPrice}`
                    },
                    'closedTrade',
                  );
                  createEntry(trade, 'pandingTrade');
                  console.log(
                    `Target reached  in short sell: livePrice${livePrice} <= trade.targetPrice${trade.targetPrice}`,
                    livePrice - realEntry,
                  );
                } else if (livePrice >= trade.stopLoss) {
                  deleteEntry(trade.uniqId, 'activeTrade');
                  createEntry(
                    {
                      ...trade,
                      profit:  livePrice - realEntry,
                      exitPrice: livePrice,
                      exitPrc: differentPrc(realEntry, livePrice),
                      appliedCondition:`Stoploss hit in short sell: livePrice${livePrice} >= trade.stopLoss${trade.stopLoss}`
                    },
                    'closedTrade',
                  );
                  createEntry(trade, 'pandingTrade');
                  console.log(
                    `Stoploss hit in short sell: livePrice${livePrice} >= trade.stopLoss${trade.stopLoss}`,
                    livePrice - realEntry,
                  );
                }
              } else {
                //  condition for normal order
                if (livePrice >= trade.targetPrice) {
                  deleteEntry(trade.uniqId, 'activeTrade');
                  createEntry(
                    {
                      ...trade,
                      profit: livePrice - realEntry,
                      exitPrice: livePrice,
                      exitPrc: differentPrc(realEntry, livePrice),
                      appliedCondition:`Target reached in normal trade:  livePrice${livePrice} >= trade.targetPrice${trade.targetPrice}`
                    },
                    'closedTrade',
                  );
                  createEntry(trade, 'pandingTrade');
                  console.log(
                    `Target reached in normal trade:  livePrice${livePrice} >= trade.targetPrice${trade.targetPrice}`,
                    livePrice - realEntry,
                  );
                } else if (livePrice <= trade.stopLoss) {
                  deleteEntry(trade.uniqId, 'activeTrade');
                  createEntry(
                    {
                      ...trade,
                      profit: livePrice - realEntry,
                      exitPrice: livePrice,
                      exitPrc: differentPrc(realEntry, livePrice),
                      appliedCondition:`Stoploss hit in normal trade: livePrice${livePrice} <= trade.stopLoss${trade.stopLoss}`
                    },
                    'closedTrade',
                  );
                  createEntry(trade, 'pandingTrade');
                  console.log(
                    `Stoploss hit in normal trade: livePrice${livePrice} <= trade.stopLoss${trade.stopLoss}`,
                    livePrice - realEntry,
                  );
                }
              }
            });
           
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
      const restartServer = readEntries('restartServer');
      watchTradeFile();
      createEntry({ restartnum: restartServer && restartServer.length ? (restartServer.length+ 1):1 }, 'trades');
    });

    connection.on('close', (reson) => {
     
      updateConfigValue('tradeMonitoring', false);
     // const restartServer = readEntries('restartServer');
    //  watchTradeFile();
      //createEntry({ restartnum: restartServer && restartServer.length ? (restartServer.length+ 1):1 }, 'trades');
  
 console.log('Connection closed because :', reason);
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
