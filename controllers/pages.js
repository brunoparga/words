const letters = require('../helpers/letters');
const scoreCalc = require('../helpers/score');

exports.getLetters = (_req, res) => {
  res.render('letters', { letters: letters() });
};

exports.postWord = (req, res) => {
  const { word } = req.body;
  const grid = req.body.letters.replace(/\W/gi, '');
  const score = scoreCalc(word.toUpperCase(), grid.split(''));
  const assigns = { word, grid, score };
  res.render('word', assigns);
};
