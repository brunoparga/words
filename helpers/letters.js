const fs = require('fs');
const mapValues = require('lodash/mapValues');
const times = require('lodash/times');
const difference = require('lodash/difference');
const sample = require('lodash/sample');
const shuffle = require('lodash/shuffle');

const generateTiles = () => {
  const tiles = [];

  let tileCount = JSON.parse(fs.readFileSync('data/letters.json'));
  tileCount = mapValues(tileCount, 'count');

  Object.keys(tileCount).forEach((letter) => {
    times(tileCount[letter], () => tiles.push(letter));
  });

  return tiles;
};

const hasVowels = (grid) => difference(grid, 'AEIOU'.split('')).length < grid.length;

const generateGrid = () => {
  const tiles = generateTiles();
  const grid = Array(8).fill(undefined).map(() => sample(tiles));
  if (!hasVowels(grid)) { return generateGrid(); }
  return shuffle(grid);
};

module.exports = generateGrid;
