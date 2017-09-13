const add = function (data, arg) {
  const task = {
    id: data.length + 1,
    description: arg,
    complete: false,
  };
  data.push(task);
  return data;
};

module.exports = add;
