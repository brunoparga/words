const fs = require('fs');

// An array of all English words in the wordlist that are 8 letters or shorter
module.exports = fs
  .readFileSync('data/words.txt', 'utf8')
  .split('\n')
  .filter((word) => word.length <= 8);
