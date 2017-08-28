const readFile = require('./readfile.js');
const writeFile = require('./writefile.js');

function clearcount() {
  const taskObj = readFile();
  taskObj.idCount = 0;
  writeFile(taskObj);
}

module.exports = clearcount;
