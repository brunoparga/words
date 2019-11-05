const chai = require('chai');

chai.should();
chai.use(require('chai-things'));

const allWords = require('../helpers/all-words');

describe('allWords', function testAllWords() {
  it('should be an array', function isArray() {
    allWords.should.be.an('array');
  });

  it('should only have strings', function onlyHasStrings() {
    // allWords.should.all.be.a('string') looks like it should work, but does not. ¯\_(ツ)_/¯
    allWords.should.all.satisfy((elt) => typeof elt === 'string');
  });

  it('should have no empty strings and no words longer than the grid',
    function noInvalidLengthStrings() {
      allWords.should.all.satisfy((elt) => elt.length > 0 && elt.length <= 9);
    });

  it('should have a test word known to exist', function hasBanana() {
    allWords.should.include('TEST');
  });
});
