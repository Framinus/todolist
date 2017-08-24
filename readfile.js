const fs = require('fs');

function readFile() {
  const taskObj = JSON.parse(fs.readFileSync('./tasks.json', 'utf-8'));
  return taskObj;
}

module.exports = readFile;
