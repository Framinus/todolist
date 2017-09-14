const del = function (data, arg) {
  const task = data.find(tsk => tsk.id == arg);
  task.complete = true;
  console.log(`Deleted task ${task.id}`);
  return data;
};

module.exports = del;
