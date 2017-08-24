const readFile = require('./../readfile.js');
const writeFile = require('./../writefile.js');

function deleteTask(taskID) {
  const taskObj = readFile();
  let index = 0;
  for (let i = 0; i < taskObj.tasks.length; i += 1) {
    console.log(taskObj.tasks[0].id);
    if (taskObj.tasks[i].id === taskID) {
      index = taskObj.tasks[i].id;
    }
    return index;
  }
  console.log(deleteTask());
  console.log(taskObj.tasks[0].task);
  console.log(`Deleted task ${taskID}: ${taskObj.tasks[index].task}`);
  taskObj.tasks.splice(index, 1);
  writeFile(taskObj);
}

module.exports = deleteTask;
