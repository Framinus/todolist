const add = function (data, arg) {
  // i'm just adding an object to the task array. done.
  const task =
    {
      id: data.length + 1,
      description: arg,
    };
  data.push(task);
  return data;
};

module.exports = add;
