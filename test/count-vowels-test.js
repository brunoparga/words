require('chai').should();

const countVowels = require('../helpers/count-vowels');

describe('countVowels', function testCountVowels() {
  it('correctly counts the vowels in a letter array',
    function countCorrectly() {
      countVowels('SEQUOIA'.split('')).should.equal(5);
      countVowels('SYZYGY'.split('')).should.equal(0);
      // Ignore vowels with diacritics
      countVowels('DÜSSELDORF'.split('')).should.equal(2);
    });
});
