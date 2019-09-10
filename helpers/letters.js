const _ = require('lodash')

const generateLetters = () => {
  const letters = []

  for (let i = 0; i < 2; i++) {
    const vowels = 'AEIOU'.split('')
    const index = Math.floor(Math.random() * vowels.length)
    letters.push(vowels[index])
  }

  for (let j = 0; j < 7; j++) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const index = Math.floor(Math.random() * alphabet.length)
    letters.push(alphabet[index])
  }

  return _.shuffle(letters)
}

module.exports = generateLetters
