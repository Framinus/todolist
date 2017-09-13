const add = function (data, arg) {
  // i'm just adding an object to the task array. done.
  data.push(
    {
      id: data.length + 1,
      description: arg,
    },
  );
};

module.exports = add;
