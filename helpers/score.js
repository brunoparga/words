const count = (element, collection) => {
  return collection.filter(x => x === element).length
}

const wordInLetters = (word, letters) => {
  return word.split('').every((letter) => {
    return count(letter, word.split('')) <= count(letter, letters)
  })
}

const calc = (word, letters) => {
  if (!wordInLetters(word, letters)) { return 0 }
  return 100
}

module.exports = calc
