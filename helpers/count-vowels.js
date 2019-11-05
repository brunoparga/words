// Count how many vowels exist in an array of letters
module.exports = (collection) => collection
  .filter((letter) => 'AEIOU'.split('').includes(letter))
  .length;
