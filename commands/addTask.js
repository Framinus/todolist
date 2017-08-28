const readFile = require('./../readfile.js');
const writeFile = require('./../writefile.js');

const initialObj = {
  idCount: 0,
  tasks: [],
};

try {
  readFile();
} catch (e) {
  writeFile(initialObj);
}

function addTask(taskText) {
  const taskObj = readFile();
  taskObj.tasks.push({ id: taskObj.idCount += 1, task: taskText });
  console.log(`Created task ${taskObj.idCount}`);
  writeFile(taskObj);
}


module.exports = addTask;
