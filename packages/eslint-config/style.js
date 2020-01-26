module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
        'stylelint-prettier/recommended',
    ],
    processors: ['stylelint-processor-html'],
    rules: {
        'declaration-empty-line-before': null,
        'max-nesting-depth': 4,
        'no-descending-specificity': null,
    },
};
