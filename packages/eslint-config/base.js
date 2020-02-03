module.exports = {
  root: true,
  extends: ['airbnb-base'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  rules: {
    'no-param-reassign': 1,
    // es6
    'arrow-parens': [2, 'as-needed'],
    'no-confusing-arrow': 0,
    // import
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': [
      'error',
      {
        ignore: ['config', '@/', 'common/'],
      },
    ],
    // style
    'implicit-arrow-linebreak': 0,
    'object-curly-newline': 0,
  },
  globals: {
    $: true,
  },
};
