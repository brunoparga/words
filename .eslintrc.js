module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha:true,
    node: true,
  },
  extends: [
    'plugin:mocha/recommended',
    'plugin:chai-friendly/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'airbnb-base'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: [
    'chai-friendly',
    'mocha',
    'you-dont-need-lodash-underscore',
  ],
  rules: {
    "prefer-arrow-callback": 0,
    "mocha/prefer-arrow-callback": 2,
  }
};
