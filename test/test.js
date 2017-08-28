const expect = require('chai').expect;
const fs = require('fs');
const addTask = require('./../commands/addTask.js');
const listTasks = require('./../commands/listTask.js');
const deleteTask = require('./../commands/deleteTask.js');
const completeTask = require('./../commands/completeTask.js');
const writeFile = require('./../writefile.js');
const readFile = require('./../readfile.js');
const freshStart = require('./../freshstart.js');
const initialize = require('./../initialize.js');

beforeEach(function () {
  freshStart();
});

describe('tasks', function() {
  context('when the tasks.json file does not exist', function() {
    it('should create a tasks.json file if none exists', function() {
      fs.unlinkSync('./tasks.json');
      initialize();
      expect(fs.existsSync('./../tasks.json')).to.eql(true);
    });
  });
});

describe('addTask()', function() {
  it('should be a function', function () {
    expect(addTask).to.be.a('function');
  });
  it('should return an object', function() {
    addTask('create task');
    expect(listTasks()).to.be.an('object');
  });
  it('should add an object to the task array', function() {
    addTask('buy milk');
    const taskObj = listTasks();
    for (let i = 0; i < taskObj.length; i += 1) {
      expect(taskObj.tasks[i].task).to.include('buy milk');
    }
  });
  it('should write the changes to the tasks.json file', function() {
    freshStart();
    const taskObj = listTasks();
    addTask('buy bread');
    writeFile(taskObj);
    const taskObj2 = listTasks();
    for (let i = 0; i < taskObj.length; i += 1) {
      expect(taskObj2.tasks[i]).to.include('buy bread');
    }
  });
});
//
// // things we want to test from delete.js:
describe('deleteTask()', function() {
  it('should be a function', function() {
    expect(deleteTask).to.be.a('function');
  });
  it('should remove one item from the tasks array', function() {
    freshStart();
    addTask('remove me');
    deleteTask(1);
    const taskObj = readFile();
    for (let i = 0; i < taskObj.tasks.length; i += 1) {
      expect(taskObj.tasks[i].id).to.not.equal(1);
    }
  });
  it('should throw an error if passed invalid arguments', function() {
    expect(deleteTask).to.throw('Please enter a valid ID number');
  });
  it('should throw if a string is passed in', function() {
  });
});


// if I pass deleteTask a string, it should throw an error.
// if I pass deleteTask an object, it should throw an error.

describe('completeTask', function() {
  it('should be a function', function() {
    expect(completeTask).to.be.a('function');
  });
  it('should remove one item from the tasks array', function() {
    freshStart();
    addTask('complete me');
    completeTask(1);
    const taskObj = readFile();
    for (let i = 0; i < taskObj.tasks.length; i += 1) {
      expect(taskObj.tasks[i].id).to.not.equal(1);
    }
  });
  it('should throw an error if passed invalid arguments', function() {
    expect(completeTask).to.throw('Please enter a valid ID number');
  });
});

describe('listTasks()', function() {
  it('listTasks() should be a function', function() {
    expect(listTasks).to.be.a('function');
  });
  it('listTasks() should return an object', function() {
    const taskObj = listTasks();
    expect(taskObj).to.be.an('object');
  })
});

// does listTasks write text to the console?
// does listTasks write an object to the console?
