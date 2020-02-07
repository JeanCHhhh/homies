module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'max-nesting-depth': 4,
    'no-descending-specificity': null,
    'unit-no-unknown': [
      true,
      {
        ignoreFunctions: ['image-set'],
      },
    ],
  },
};
