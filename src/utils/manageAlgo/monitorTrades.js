// utils/monitorTrades.js
const fs =  require('fs');
const path =  require('path');
const WebSocket =  require('ws');
const { deleteEntry, createEntry } = require('./manageActiveTrade');
const {updateConfigValue, getConfigValue} = require('./config');
let ws;
let monitoring = getConfigValue('tradeMonitoring');
let debounceTimeout;
const DEBOUNCE_INTERVAL = 500;

function startMonitoringTrades() {
  if (monitoring) return; // Avoid starting multiple monitors
  // monitoring = true;
  updateConfigValue('tradeMonitoring', true);
  const filePath = path.join(process.cwd(),   '../activeTrade.json');

  ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

  ws.onmessage = (event) => {
    // Clear the existing debounce timer
    if (debounceTimeout) clearTimeout(debounceTimeout);

    // Set a new debounce timer
    debounceTimeout = setTimeout(() => {
      try {
        const data = JSON.parse(event.data);
        const livePrice = parseFloat(data.p);
        console.log(livePrice)
        // Read active trades
        const trades = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

        if (!Array.isArray(trades) || trades.length === 0) {
          console.log('No active trades found. Stopping monitoring...');
          stopMonitoringTrades();
          return;
        }

        // Check each trade for targetPrice or stopLoss
        trades.forEach((trade, index) => {
          if (livePrice >= trade.targetPrice) {
            deleteEntry(trade.uniqId, '../activeTrade');
            createEntry({...trade,profit: livePrice - trade.entryPrice},'../closedTrade');
            console.log('target price reached', livePrice - trade.entryPrice);
          } else if (livePrice <= trade.stopLoss) {
            deleteEntry(trade.uniqId, '../activeTrade');
            createEntry({...trade,loss: trade.entryPrice - livePrice},'../closedTrade');
            console.log('stop loss reached', trade.entryPrice - livePrice);
          }
        });
      } catch (error) {
        console.error('Error processing WebSocket message:', error);
      }
    }, DEBOUNCE_INTERVAL); // Wait for the debounce interval before executing
  };

  ws.onclose = () => {
    console.log('WebSocket closed. Stopping monitoring...');
    // monitoring = false;
    updateConfigValue('tradeMonitoring', false);
  };

  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
    // monitoring = false;
    updateConfigValue('tradeMonitoring', false);
  };

  console.log('Started monitoring trades...');
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
  const filePath = path.join(process.cwd(),   '../activeTrade.json');

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

module.exports = { startMonitoringTrades, stopMonitoringTrades, watchTradeFile };
