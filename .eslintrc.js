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

  plugins: ['react', 'react-hooks', 'prettier'],

  extends: ['standard', 'standard-react', 'prettier', 'prettier/react'],

  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 2,
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
