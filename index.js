'use strict'

var numberIsFinite = require('is-finite')
var isInteger = require('is-integer')
var parseExponential = require('parse-exponential')

exports = module.exports = precision

function precision (value) {
  if (!numberIsFinite(value)) {
    throw new Error('Value must be a finite number')
  }
  
  var exponential = parseExponential(value.toExponential())
  var coefficient = exponential[0]
  var exponent = exponential[1]
  var places = (coefficient.split('.')[1] || '').length
  return places + (-1 * parseInt(exponent, 10))
}
