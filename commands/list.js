const list = function (data) {
  console.log(`\nID  Description`);
  console.log(`----------------`);
  data.forEach((task) => {
    if (!task.complete) {
      console.log(`${task.id}   ${task.description}`);
    }
  });
  console.log(`\nYou have ${data.length} tasks\n`);
  return data;
};

module.exports = list;
