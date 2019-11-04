require('chai').should();
const wordInGrid = require('../helpers/word-in-grid');

describe('wordInGrid', function testWordInGrid() {
  it('should return true for an empty word', function emptyWord() {
    const testValue = wordInGrid('', 'BANANA'.split(''));
    testValue.should.equal(true);
  });
  it('should return false for an empty grid', function emptyGrid() {
    const testValue = wordInGrid('BANANA', []);
    testValue.should.equal(false);
  });
  it('should return false if the grid does not contain the word', function notInGrid() {
    const testValue = wordInGrid('BANANA', 'PINEAPPLE'.split(''));
    testValue.should.equal(false);
  });
  it('should return true if the grid contains the word', function yesInGrid() {
    const testValue = wordInGrid('BANANA', 'ABCADNAANE'.split(''));
    testValue.should.equal(true);
  });
});
