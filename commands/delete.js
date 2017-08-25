const readFile = require('./../readfile.js');
const writeFile = require('./../writefile.js');

function deleteTask(taskID) {
  const taskObj = readFile();
  let index = 0;
  if (isNaN(taskID) === true) {
    throw new Error('Please enter a valid ID number');
  }
  try {
    let i = 0;
    while (i < taskObj.tasks.length) {
      if (taskObj.tasks[i].id !== taskID) {
        i += 1;
      } else {
        index = i;
        i += 1;
      }
    }
  } catch (e) {
    console.error(e.message);
  }
  console.log(`Deleted task ${taskID}: ${taskObj.tasks[index].task}`);
  taskObj.tasks.splice(index, 1);
  writeFile(taskObj);
}

module.exports = deleteTask;
