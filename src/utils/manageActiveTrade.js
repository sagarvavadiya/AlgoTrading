const fs = require('fs');
const path = require('path');

// Get the path to the JSON file
const filePath = path.join(process.cwd(), 'public', 'activeTrade.json');

// Helper function to read the JSON file
const readJsonFile = () => {
  try {
    if (!fs.existsSync(filePath)) {
      // Initialize file if it doesn't exist
      fs.writeFileSync(filePath, JSON.stringify([], null, 2), 'utf8');
    }

    const data = fs.readFileSync(filePath, 'utf8');
    // If file is empty, return an empty array
    if (!data) {
      return [];
    }

    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    throw new Error('Failed to read JSON file');
  }
};

// Helper function to write to the JSON file
const writeJsonFile = data => {
  console.log(data);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// 1. Create a new entry
const createEntry = newEntry => {
  console.log({ newEntry });
  const data = readJsonFile();
  data.push(newEntry);
  writeJsonFile(data);
  return { message: 'Entry created successfully', newEntry };
};

// 2. Read all entries
const readEntries = () => {
  return readJsonFile();
};

// 3. Update an entry by ID
const updateEntry = (uniqId, updatedFields) => {
  const data = readJsonFile();
  const entryIndex = data.findIndex(entry => entry.uniqId === uniqId);

  if (entryIndex === -1) {
    throw new Error('Entry not found');
  }

  data[entryIndex] = { ...data[entryIndex], ...updatedFields };
  writeJsonFile(data);
  return {
    message: 'Entry updated successfully',
    updatedEntry: data[entryIndex],
  };
};

// 4. Delete an entry by ID
const deleteEntry = uniqId => {
  const data = readJsonFile();
  const filteredData = data.filter(entry => entry.uniqId !== uniqId);

  if (data.length === filteredData.length) {
    throw new Error('Entry not found');
  }

  writeJsonFile(filteredData);
  return { message: 'Entry deleted successfully' };
};

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
      createEntry(data.data);
      console.log('Message received:', data.senderID);
      io.in(data.senderID).emit('onAddAlgo', data.data);
    });

    // Emiit after disconnect
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
}

module.exports = { createEntry, readEntries, updateEntry, deleteEntry,manageSocket };
