const readFile = require('./../readfile.js');
const writeFile = require('./../writefile.js');

function completeTask(taskID) {
  const taskObj = readFile();
  let index = 0;
  let i = 0;
  while (i < taskObj.tasks.length) {
    if (taskObj.tasks[i].id !== taskID) {
      i += 1;
    } else {
      index = i;
      i += 1;
    }
  }
  console.log(`Completed task ${taskID}: ${taskObj.tasks[index].task}`);
  taskObj.tasks.splice(index, 1);
  writeFile(taskObj);
}

module.exports = completeTask;
