'use strict'

var test = require('tape')
var precision = require('./')

test('precision', function (t) {
  t.equal(precision(0), 0)
  t.equal(precision(1), 0)

  t.equal(precision(1.1), 1)
  t.equal(precision(1.12), 2)
  t.equal(precision(12.3), 1)
  t.equal(precision(123.4), 1)
  t.equal(precision(-123.45), 2)

  t.equal(precision(.00001), 5)

  t.end()
})
