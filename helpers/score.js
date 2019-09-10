const fs = require('fs')

const wordInGrid = require('./in_grid')
const values = require('./values')

const englishWord = (word) => {
  const allWords = fs.readFileSync('words.txt', 'utf8')
  return allWords.split('\n').includes(word)
}

const calc = (word, grid) => {
  if (!wordInGrid(word, grid) || !englishWord(word)) { return 0 }
  return word.split('').reduce(values, 0) * 100
}

module.exports = calc
