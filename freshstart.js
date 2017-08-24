const readFile = require('./readfile.js');
const writeFile = require('./writefile.js');

function freshStart() {
  const taskObj = readFile();
  const initialObj = {
    idCount: 0,
    tasks: [],
  };
  if (taskObj.tasks.length !== 0) {
    writeFile(initialObj);
  } else {
    return 'the file exists';
  }
  return 'created new file';
}

module.exports = freshStart;
