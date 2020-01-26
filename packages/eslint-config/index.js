module.exports = {
    extends: ['airbnb-base', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    env: {
        browser: true,
    },
    rules: {
        'arrow-parens': 0,
        'import/named': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        indent: [2, 4, { SwitchCase: 1 }],
        'lines-between-class-members': 0,
        'prefer-destructuring': 1,
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/html-indent': [2, 4, { SwitchCase: 1 }],
        'vue/html-self-closing': 0,
        'vue/max-attributes-per-line': 0,
        'vue/name-property-casing': ['error', 'kebab-case'],
        'vue/singleline-html-element-content-newline': 0,
        'prettier/prettier': [
            'error',
            {
                printWidth: 100,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
            },
        ],
    },
    globals: {
        Vue: true,
    },
};
