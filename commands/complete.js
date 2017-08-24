const readFile = require('./../readfile.js');
const writeFile = require('./../writefile.js');

function completeTask(taskID) {
  const taskObj = readFile();
  let index = 0;
  for (let i = 0; i < taskObj.tasks.length; i += 1) {
    if (taskObj.tasks[i].id === taskID) {
      index = taskObj.tasks[i].id;
    }
  }
  // const index = taskID - 1;
  // displays the deleted task ID and task text to the console.
  console.log(`Completed task ${taskID}: ${taskObj.tasks[index].task}`);
  taskObj.tasks.splice(index, 1);
  writeFile(taskObj);
}

module.exports = completeTask;
