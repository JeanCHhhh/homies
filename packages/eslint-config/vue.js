module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
  ],
  rules: {
    // import
    'import/extensions': 0,
    'import/no-unresolved': 0,
    // vue
    'vue/html-indent': [1, 4],
  },
  globals: {
    Vue: true,
  },
};
