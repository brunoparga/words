const chai = require('chai');

chai.should();
chai.use(require('chai-things'));

const countVowels = require('../helpers/count-vowels');
const generateTiles = require('../helpers/generate-tiles');

describe('generateTiles', function testGenerateTiles() {
  it('returns an array with 196 one-letter elements', function rightSizedArray() {
    generateTiles().should.be.an('array');
    generateTiles().should.have.lengthOf(196);
    generateTiles().should.all.satisfy(
      (elt) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').includes(elt),
    );
  });

  it('contains the right letters', function rightLetters() {
    generateTiles().should.include.members(['Q', 'Q', 'Z', 'Z']);
  });

  it('contains the right number of vowels and consonants',
    function rightVowels() {
      countVowels(generateTiles()).should.equal(75);
    });
});
