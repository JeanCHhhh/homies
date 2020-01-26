module.exports = {
  extends: [require.resolve('./base'), 'airbnb'],
  rules: {
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/media-has-caption': 0,
    'react/jsx-curly-newline': [
      0,
      {
        multiline: 'require',
        singleline: 'require',
      },
    ],
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 1,
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 0,
  },
  plugins: ['react-hooks'],
};
