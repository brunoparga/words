const letters = require('../helpers/letters')
const scoreCalc = require('../helpers/score')

exports.getLetters = (_req, res, _next) => {
  res.render('letters', { letters: letters() })
}

exports.postWord = (req, res, _next) => {
  const word = req.body.word
  const letters = req.body.letters.replace(/\W/gi, '')
  const score = scoreCalc(word.toUpperCase(), letters.split(''))
  const assigns = { word: word, letters: letters, score: score }
  res.render('word', assigns)
}