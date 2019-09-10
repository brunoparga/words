const count = (element, collection) => {
  return collection.filter(x => x === element).length
}

const wordInGrid = (word, grid) => {
  return word.split('').every((letter) => {
    return count(letter, word.split('')) <= count(letter, grid)
  })
}

module.exports = wordInGrid
