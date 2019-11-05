module.exports = {
  'Step one': function typeAWord(browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 400)
      .setValue('input[name=word]', 'flargh');
  },

  'Step two': function getWordScore(browser) {
    browser
      .click('.word > .btn')
      .pause(400)
      .assert.containsText('h1', 'flargh')
      .assert.containsText('h2.score', 'You did not score any points');
  },

  'Step three': function goBack(browser) {
    browser
      .click('a.back')
      .pause(200)
      .assert.containsText('h1', 'Welcome to the Words Game!');
  },
};
