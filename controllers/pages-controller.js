const generateGrid = require('../helpers/generate-grid');
const calculateScore = require('../helpers/calculate-score');

exports.getLetters = (_req, res) => {
  res.render('letters', { letters: generateGrid(), title: 'Make a word' });
};

exports.postWord = (req, res) => {
  const { word } = req.body;
  const grid = req.body.letters.replace(/\W/gi, '');
  const score = calculateScore(word.toUpperCase(), grid.split(''));
  const assigns = {
    word, grid, score, title: 'Score',
  };
  res.render('word', assigns);
};
