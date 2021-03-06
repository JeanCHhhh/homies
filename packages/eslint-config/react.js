module.exports = {
  extends: ['airbnb', require.resolve('./base'), 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 1,
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 0,
  },
  plugins: ['react-hooks'],
};
