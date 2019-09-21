const fs = require('fs');
const mapValues = require('lodash/mapValues');

let letterValues = JSON.parse(fs.readFileSync('data/letters.json'));
letterValues = mapValues(letterValues, 'value');

const letterValueReducer = (acc, letter) => acc + letterValues[letter];

module.exports = letterValueReducer;
