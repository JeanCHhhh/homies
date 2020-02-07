module.exports = {
  root: true,
  extends: ['airbnb-base'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  rules: {
    'no-param-reassign': 1,
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    // es6
    'arrow-parens': [2, 'as-needed'],
    'no-confusing-arrow': 0,
    // import
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    // style
    'implicit-arrow-linebreak': 0,
    'object-curly-newline': 0,
  },
  globals: {
    $: true,
  },
};
