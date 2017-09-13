module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended',
  ],
  env: {
    browser: true
  },
  rules: {
    'comma-dangle': [1, 'always-multiline'],
  },
};
