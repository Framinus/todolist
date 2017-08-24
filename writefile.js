const fs = require('fs');

function writeFile(taskObj) {
  fs.writeFileSync('./tasks.json', JSON.stringify(taskObj));
}

module.exports = writeFile;
