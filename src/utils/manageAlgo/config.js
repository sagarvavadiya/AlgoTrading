const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(),'public', 'config.json');

const getConfigValue = key => {
  try {
    if (!fs.existsSync(filePath)) {
      // Initialize file if it doesn't exist
      fs.writeFileSync(filePath, JSON.stringify({}, null, 2), 'utf8');
    }
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const config = JSON.parse(fileContent);

    if (!(key in config)) {
      fs.writeFileSync(filePath, JSON.stringify({[key]: false}, null, 2), 'utf8');
    }

    return config[key];
  } catch (error) {
    return null;
  }
};

const updateConfigValue = (key, newValue) => {
  try {

    if (!fs.existsSync(filePath)) {
      // Initialize file if it doesn't exist
      fs.writeFileSync(filePath, JSON.stringify({[key]: newValue}, null, 2), 'utf8');
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const config = JSON.parse(fileContent);

    if (!(key in config)) {
      fs.writeFileSync(filePath, JSON.stringify({[key]: newValue}, null, 2), 'utf8');
    }

    config[key] = newValue;

    fs.writeFileSync(filePath, JSON.stringify(config, null, 2));
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = { getConfigValue, updateConfigValue };
