const should = require('chai').should();
const inGrid = require('../helpers/in_grid');

describe('wordInGrid', function () {
  it('should return true for an empty word', function () {
    const testValue = inGrid('', 'BANANA'.split(''));
    testValue.should.equal(true);
  });
  it('should return false for an empty grid', function () {
    const testValue = inGrid('BANANA', []);
    testValue.should.equal(false)
  });
  it('should return false if the grid does not contain the word', function () {
    const testValue = inGrid('BANANA', 'PINEAPPLE'.split(''))
    testValue.should.equal(false)
  });
  it('should return true if the grid contains the word', function () {
    const testValue = inGrid('BANANA', 'ABCADNAANE'.split(''))
    testValue.should.equal(true)
  });
});
