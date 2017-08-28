const readFile = require('./../readfile.js');
const writeFile = require('./../writefile.js');


function addTask(taskText) {
  const taskObj = readFile();
  taskObj.tasks.push({ id: taskObj.idCount += 1, task: taskText });
  console.log(`Created task ${taskObj.idCount}`);
  writeFile(taskObj);
}


module.exports = addTask;
