const fs = require('fs');
const mapValues = require('lodash/mapValues');

let letterValues = JSON.parse(fs.readFileSync('data/letters.json'));
letterValues = mapValues(letterValues, 'value');

// With .reduce, calculate the value of each letter and thus of the word
module.exports = (acc, letter) => acc + letterValues[letter];
