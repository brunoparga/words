require('chai').should();

const calculateScore = require('../helpers/calculate-score');

describe('calculateScore', function testCalculateScore() {
  before('set up test examples', function setUpExamples() {
    this.invalidWord = 42;
    this.validWord = 'TEST';
    this.invalidGrid = 'PROTEST';
    this.validGrid = 'TESTIFY'.split('');
    this.anotherGrid = 'BANANA'.split('');
  });

  it('should only accept a string and a letter array as arguments',
    function throwsWithWrongArgs() {
      calculateScore.bind(this, this.invalidWord, this.validGrid).should.throw();
      calculateScore.bind(this, this.validWord, this.invalidGrid).should.throw();
      calculateScore.bind(this, this.invalidWord, this.invalidGrid).should.throw();
    });

  it('should score 0 if the word is not in the grid', function notInGrid() {
    calculateScore(this.validWord, this.anotherGrid).should.equal(0);
  });

  it('should score 0 if the word does not exist', function notAWord() {
    calculateScore('FLARGH', 'FLARGHALITY'.split('')).should.equal(0);
  });

  it('should correctly score words', function correctScores() {
    calculateScore(this.validWord, this.validGrid).should.equal(400);
    calculateScore('JAZZ', 'ZSEATJTZ'.split('')).should.equal(2900);
  });
});
