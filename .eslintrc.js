module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },

  env: {
    browser: true,
    es6: true,
    jest: true,
  },

  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    parser: 'babel-eslint',
    sourceType: 'module',
  },

  plugins: ['react', 'prettier'],

  extends: ['standard', 'standard-react', 'prettier', 'prettier/react'],

  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'jsx-quotes': ['error', 'prefer-double'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    semi: ['error', 'never'],
  },
}
