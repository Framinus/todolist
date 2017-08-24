const completeTask = require('./../commands/complete.js');
const expect = require('chai').expect;
// complete.js tests:
// is taskObj an object? (typeof)
describe('completeTask', () => {
  it('should be a function', () => {
    expect(completeTask).to.be.a('function');
  });
});
// is jObj a string? (typeof)
// is the value of index a number? (typeof)
