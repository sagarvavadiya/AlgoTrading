// server.js
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const next = require('next');
const { watchTradeFile } = require('./src/utils/manageAlgo/monitorTrades');
const { manageSocket } = require('./src/utils/manageAlgo/manageSocket');

// Set up Next.js app
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Create Express and HTTP servers
const expressApp = express();
const server = createServer(expressApp);

// Set up Socket.io server
const io = new Server(server);

manageSocket(io)
watchTradeFile()
// Prepare the Next.js app and routes
app.prepare().then(() => {
  // Serve the Next.js pages
  expressApp.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, err => {
    if (err) throw err;

    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
