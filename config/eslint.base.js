'use strict'

module.exports = {
  extends: [
    'eslint:recommended',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
  },
  globals: {
    process: true
  },
  plugins: [
    'react',
  ],
  settings: {
    react: {
      pragma: 'm',
    },
  },
  rules: {
    'no-unused-vars': [1, {
      'args': 'none',
      'varsIgnorePattern': '^m$',
    }],
    'react/jsx-uses-vars': 1,
  }
}
