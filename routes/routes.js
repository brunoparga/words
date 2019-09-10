const express = require('express')
const letters = require('../helpers/letters')
const scoreCalc = require('../helpers/score')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('letters', { letters: letters() })
})

router.post('/word', (req, res, next) => {
  const word = req.body.word
  const letters = req.body.letters.replace(/\W/gi, '')
  const score = scoreCalc(word.toUpperCase(), letters.split(''))
  console.log(score)
  res.render('word', {
    word: word,
    letters: letters,
    score: score
  })
})

module.exports = router
