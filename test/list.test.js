const expect = require('chai').expect;
// const listTasks = require('./../commands/list.js');
const listTasks = require('./../commands/list.js');


// list.js tasks:
// is listTasks a function? (typeof)
describe('listTasks()', () => {
  it('listTasks() should be a function', () => {
    expect(listTasks).to.be.a('function');
  });
  it('listTasks() should return an object', () => {
    // expect(taskObj).to.be.an('object');
  })
});

// does listTasks write text to the console?
// does listTasks write an object to the console?
