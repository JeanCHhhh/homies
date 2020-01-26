module.exports = {
  extends: [require.resolve('./base'), 'plugin:vue/recommended'],
  rules: {
    'import/no-unresolved': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
  },
  globals: {
    Vue: true,
  },
};
