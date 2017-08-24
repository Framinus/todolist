const readFile = require('./../readfile.js');
const writeFile = require('./../writefile.js');

// this function reads the json file, parses it, and prints it to the terminal.

function listTasks() {
  const taskObj = readFile();
  console.log(`\nID    Description`);
  console.log(`--    -----------`);
  // i am iterating through the tasks array inside of the taskObj object.
  for (let i = 0; i < taskObj.tasks.length; i += 1) {
    console.log(`${taskObj.tasks[i].id}     ${taskObj.tasks[i].task}`);
  }
  if (taskObj.tasks.length === 1) {
    console.log(`\nYou have ${taskObj.tasks.length} ${'task.'}\n`);
  } else {
    console.log(`\nYou have ${taskObj.tasks.length} ${'tasks.'}\n`);
  }
  return taskObj;
}
module.exports = listTasks;
