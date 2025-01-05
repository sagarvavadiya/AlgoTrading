const fs = require('fs');
const path = require('path');


// Helper function to read the JSON file
const readJsonFile = (filename) => {
  const filePath = path.join(process.cwd(),   `${filename}.json`);

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
const writeJsonFile = (data,filename) => {
  console.log(data);
  const filePath = path.join(process.cwd(),   `${filename}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// 1. Create a new entry
const createEntry = (newEntry,filename) => {
  console.log({ newEntry });
  const data = readJsonFile(filename);
  data.push(newEntry);
  writeJsonFile(data,filename);
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
const deleteEntry = (uniqId,filename) => {
  const data = readJsonFile(filename);
  const filteredData = data.filter(entry => entry.uniqId !== uniqId);

  if (data.length === filteredData.length) {
    throw new Error('Entry not found');
  }

  writeJsonFile(filteredData,filename);
  return { message: 'Entry deleted successfully' };
};



module.exports = { createEntry, readEntries, updateEntry, deleteEntry };
