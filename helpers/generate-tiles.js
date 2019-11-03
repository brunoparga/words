const fs = require('fs');
const mapValues = require('lodash/mapValues');

// Return an array of all the letter tiles in English-language Scrabble (no blanks)
module.exports = () => {
  let tileCount = JSON.parse(fs.readFileSync('data/letters.json'));
  tileCount = mapValues(tileCount, 'count');

  const tiles = [];
  Object.keys(tileCount).forEach((letter) => {
    Array(tileCount[letter]).fill(null).forEach(() => tiles.push(letter));
  });
  return tiles;
};
