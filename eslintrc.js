module.exports = {
    extends: ['airbnb', 'airbnb-typescript'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-hooks',],
    root: true,
    rules: {
      'react/jsx-indent': [2, 4],
      'react/jsx-indent-props': [2, 4],
      indent: [2, 4],
      'react/jsx-filename-extension': [
          2,
          { extensions: ['.js', '.jsx', '.tsx'] }],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',
      'no-shadow': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': 'off',
      'max-len': ['error', { ignoreComments: true, code: 120 }],
      'linebreak-style': 'off',
      'no-param-reassign': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
  },
  };