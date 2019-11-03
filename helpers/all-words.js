const fs = require('fs');

// An array of all English words in the wordlist
module.exports = fs.readFileSync('data/words.txt', 'utf8').split('\n');
