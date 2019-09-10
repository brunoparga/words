const fs = require('fs');

const wordInGrid = require('./in_grid')

const englishWord = (word) => {
  const allWords = fs.readFileSync('words.txt', 'utf8')
  return allWords.split('\n').includes(word)
}

const calc = (word, grid) => {
  if (!wordInGrid(word, grid) || !englishWord(word)) { return 0 }
  return word.length * 100
}

module.exports = calc
