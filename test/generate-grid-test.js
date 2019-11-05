const chai = require('chai');

chai.should();
chai.use(require('chai-things'));

const countVowels = require('../helpers/count-vowels');
const generateGrid = require('../helpers/generate-grid');

describe('generateGrid', function testGenerateGrid() {
  it('returns an array with 8 one-letter elements', function rightSizedArray() {
    generateGrid().should.be.an('array');
    generateGrid().should.have.lengthOf(8);
    generateGrid().should.all.satisfy(
      (elt) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').includes(elt),
    );
  });

  it('has between 3 and 5 vowels', function rightNumberOfVowels() {
    countVowels(generateGrid()).should.be.above(2);
    countVowels(generateGrid()).should.be.below(6);
  });
});
