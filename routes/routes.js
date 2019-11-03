const router = require('express').Router();
const pagesController = require('../controllers/pages-controller');

router.get('/', pagesController.getLetters);
router.post('/word', pagesController.postWord);

module.exports = router;
