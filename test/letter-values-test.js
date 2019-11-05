require('chai').should();

const letterValues = require('../helpers/letter-values');

describe('letterValues', function testLetterValues() {
  it('should correctly add a letter value to 0', function addToZero() {
    letterValues(0, 'Q').should.equal(10);
  });
  it('should correctly add a letter value to an existing score',
    function addToExistingScore() {
      letterValues(3, 'P').should.equal(6);
    });
  it('should even add a letter value to a negative score (!)',
    function addToNegativeScore() {
      letterValues(-5, 'P').should.equal(-2);
    });
});
