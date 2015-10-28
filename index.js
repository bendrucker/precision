'use strict'

var numberIsFinite = require('is-finite')
var parseExponential = require('parse-exponential')

module.exports = function precision (value) {
  if (!numberIsFinite(value)) {
    throw new Error('Value must be a finite number')
  }

  var exponential = parseExponential(value.toExponential())
  var coefficient = exponential[0]
  var exponent = parseInt(exponential[1], 10)
  var places = (coefficient.split('.')[1] || '').length
  return !places && exponent > 0
    ? 0
    : places + (-1 * exponent)
}
