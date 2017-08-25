const expect = require('chai').expect;
const addTask = require('./../commands/add.js');
const listTasks = require('./../commands/list.js');
const deleteTask = require('./../commands/delete.js');
const completeTask = require('./../commands/complete.js');
const writeFile = require('./../writefile.js');
const readFile = require('./../readfile.js');
const freshStart = require('./../freshstart.js');
const setUp = require('./../tasks');


describe('addTask()', () => {
  it('should be a function', () => {
    expect(addTask).to.be.a('function');
  });
  it('should return an object', () => {
    addTask('create task');
    expect(listTasks()).to.be.an('object');
  });
  it('should add an object to the task array', () => {
    addTask('buy milk');
    const taskObj = listTasks();
    for (let i = 0; i < taskObj.length; i += 1) {
      expect(taskObj.tasks[i].task).to.include('buy milk');
    }
  });
  it('should write the changes to the tasks.json file', () => {
    freshStart();
    const taskObj = listTasks();
    addTask('buy bread');
    writeFile(taskObj);
    const taskObj2 = listTasks();
    for (let i = 0; i < taskObj.length; i += 1) {
      expect(taskObj2.tasks[i]).to.include('buy bread');
    }
  });
  it('should create a tasks.json file if none exists', () => {
    // if readFile() is run and cannot access tasks.json, add.js
    // should write a file and create the object. how to test this without
    // deleting the tasks.json? can you delete a file from a program?
  })
});

// things we want to test from delete.js:
describe('deleteTask()', () => {
  it('should be a function', () => {
    expect(deleteTask).to.be.a('function');
  });
  it('should remove one item from the tasks array', () => {
    freshStart();
    addTask('remove me');
    deleteTask(1);
    const taskObj = readFile();
    for (let i = 0; i < taskObj.tasks.length; i += 1) {
      expect(taskObj.tasks[i].id).to.not.equal(1);
    }
  });
});

// if I pass deleteTask a string, it should throw an error.
// if I pass deleteTask an object, it should throw an error.

describe('completeTask', () => {
  it('should be a function', () => {
    expect(completeTask).to.be.a('function');
  });
  it('should remove one item from the tasks array', () => {
    freshStart();
    addTask('complete me');
    completeTask(1);
    const taskObj = readFile();
    for (let i = 0; i < taskObj.tasks.length; i += 1) {
      expect(taskObj.tasks[i].id).to.not.equal(1);
    }
  });
  it('should fail if passed a string as an argument', () => {
    expect(completeTask).to.throw('words!');
  })
});

describe('listTasks()', () => {
  it('listTasks() should be a function', () => {
    expect(listTasks).to.be.a('function');
  });
  it('listTasks() should return an object', () => {
    const taskObj = listTasks();
    expect(taskObj).to.be.an('object');
  })
});

// does listTasks write text to the console?
// does listTasks write an object to the console?
