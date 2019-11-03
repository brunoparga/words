const letters = require('../helpers/letters');
const calcScore = require('../helpers/score');

exports.getLetters = (_req, res) => {
  res.render('letters', { letters: letters(), title: 'Make a word' });
};

exports.postWord = (req, res) => {
  const { word } = req.body;
  const grid = req.body.letters.replace(/\W/gi, '');
  const score = calcScore(word.toUpperCase(), grid.split(''));
  const assigns = {
    word, grid, score, title: 'Score',
  };
  res.render('word', assigns);
};
