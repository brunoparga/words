const count = (element, collection) => collection.filter((x) => x === element).length;

const wordInGrid = (word, grid) => word.split('').every((letter) => count(letter, word.split('')) <= count(letter, grid));

module.exports = wordInGrid;
