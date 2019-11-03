const allWords = require('./all-words');
const wordInGrid = require('./word-in-grid');
const letterValues = require('./letter-values');

// Calculate the score for a given word and grid: 100 times the Scrabble value
// of all letters in the word, provided the word exists in English and can be
// made out of the letters in the grid.
module.exports = (word, grid) => {
  if (wordInGrid(word, grid) && allWords.includes(word)) {
    return word.split('').reduce(letterValues, 0) * 100;
  }
  return 0;
};
