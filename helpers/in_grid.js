const count = (element, collection) => collection
  .filter((x) => x === element).length;

// Find out if the given word can be made with the given grid of letters.
const wordInGrid = (word, grid) => word
  .split('')
  .every((letter) => count(letter, word.split('')) <= count(letter, grid));

module.exports = wordInGrid;
