module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  rules: {
    // es6
    'arrow-parens': [2, 'as-needed'],
    'no-confusing-arrow': 0,
    // import
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': [
      'error',
      {
        ignore: ['config', '@/'],
      },
    ],
    // style
    'implicit-arrow-linebreak': 0,
    'object-curly-newline': 0,
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'ignore' } }],
  },
};
