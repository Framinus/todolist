const list = function (data) {
  console.log(`\nID  Description`);
  console.log(`----------------`);
  let idCount = 0;
  data.forEach((task) => {
    if (!task.complete) {
      idCount += 1;
      console.log(`${task.id}   ${task.description}`);
    }
  });
  console.log(`\nYou have ${idCount} tasks\n`);

  return data;
};

module.exports = list;
