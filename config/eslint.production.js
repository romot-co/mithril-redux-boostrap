'use strict'

const base = require('./eslint.base')
const merge = require('deepmerge')

module.exports = merge(base, {
  rules: {
    'no-console': 'error',
  },
})
