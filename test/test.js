const expect = require('chai').expect;
const addTask = require('./../commands/add.js');
const listTasks = require('./../commands/list.js');
const deleteTask = require('./../commands/delete.js');
const writeFile = require('./../writefile.js');
const readFile = require('./../readfile.js');

// add.js tests:

describe('addTask()', () => {
  beforeEach(() => {
    const taskObj = readFile();
    taskObj.tasks = [];
    taskObj.idCount = 0;
    writeFile(taskObj);
  });

  it('should be a function', () => {
    expect(addTask).to.be.a('function');
  });
  it('should return an object', () => {
    addTask();
    expect(listTasks()).to.be.an('object');
  });
  it('should start with an empty tasks array', () => {
    const taskObj = listTasks();
    expect(taskObj.tasks).to.be.an('array').that.is.empty;
  })
  it('should add an object to the task array', () => {
    addTask('buy milk');
    const taskObj = listTasks();
    for (let i = 0; i < taskObj.length; i += 1) {
      expect(taskObj.tasks[i].task).to.include('buy milk');
    }
  });
});

// expect addTasks to create an empty tasks.json file if it doesn't exist.
// expect addTasks to read tasks.json
// expect addTasks to write to tasks.json
// expect addTasks to log a status to the console.

// things we want to test from delete.js:
describe('deleteTask()', () => {
  beforeEach(() => {
    const taskObj = readFile();
    addTask('task to be deleted');
    writeFile(taskObj);
  });
  it('should be a function', () => {
    expect(deleteTask).to.be.a('function');
  });
  it('should remove one item from the tasks array', () => {
    deleteTask(1);
    const taskObj = readFile();
    for (let i = 0; i < taskObj.tasks.length; i += 1) {
      expect(taskObj.tasks[i].id).to.not.equal(1);
    }
  });
  it('should throw an error if passed an object', () => {
  });
});

// if I pass deleteTask a string, it should throw an error.
// if I pass deleteTask an object, it should throw an error.
