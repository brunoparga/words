/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "should" }] */
const should = require('chai').should();
const inGrid = require('../helpers/word-in-grid');

describe('wordInGrid', function testWordInGrid() {
  it('should return true for an empty word', function emptyWord() {
    const testValue = inGrid('', 'BANANA'.split(''));
    testValue.should.equal(true);
  });
  it('should return false for an empty grid', function emptyGrid() {
    const testValue = inGrid('BANANA', []);
    testValue.should.equal(false);
  });
  it('should return false if the grid does not contain the word', function notInGrid() {
    const testValue = inGrid('BANANA', 'PINEAPPLE'.split(''));
    testValue.should.equal(false);
  });
  it('should return true if the grid contains the word', function yesInGrid() {
    const testValue = inGrid('BANANA', 'ABCADNAANE'.split(''));
    testValue.should.equal(true);
  });
});
