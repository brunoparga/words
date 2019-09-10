const express = require('express')
const letters = require('../helpers/letters')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('letters', { letters: letters() })
})

router.post('/word', (req, res, next) => {
  res.render('word', {
    word: req.body.word,
    letters: req.body.letters.replace(/\W/gi, '')
  })
})

module.exports = router
