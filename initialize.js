const readFile = require('./readfile.js');
const writeFile = require('./writefile.js');

const initialize = function () {
  const initialObj = {
    idCount: 0,
    tasks: [],
  };

  try {
    readFile();
  } catch (e) {
    writeFile(initialObj);
  }
};

module.exports = initialize;
