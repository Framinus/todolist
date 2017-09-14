const complete = function (data, arg) {
  // read the data, and compare the arg to the taskID of data.
  const task = data.find(tsk => tsk.id == arg);
  task.complete = true;
  console.log(`Completed task ${task.id}`);
  return data;
};

module.exports = complete;
