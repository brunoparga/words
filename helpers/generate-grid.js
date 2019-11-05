const shuffle = require('lodash/shuffle');
const generateTiles = require('./generate-tiles');
const countVowels = require('./count-vowels');

const sample = (arr) => {
  const len = (arr == null ? 0 : arr.length);
  return len ? arr[Math.floor(Math.random() * len)] : undefined;
};

// Generate a 'grid', a list of eight letters, having 3 <= n <= 5 vowels.
const generateGrid = () => {
  const tiles = generateTiles();
  const grid = Array(8).fill(null).map(() => sample(tiles));
  const vowels = countVowels(grid);
  if (vowels < 3 || vowels > 5) {
    return generateGrid();
  }
  return shuffle(grid);
};

module.exports = generateGrid;
