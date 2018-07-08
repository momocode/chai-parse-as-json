'use strict'

module.exports = function (chai, _) {
  var Assertion = chai.Assertion
  var AssertionError = chai.AssertionError
  Assertion.addProperty('as')
  Assertion.addProperty('parse', function () {
    _.flag(this, 'parse', true)
  })
  Assertion.addProperty('json', function () {
    if (!_.flag(this, 'parse'))
      throw new Error('json called without parse')
    var obj = this._obj
    var parsed, invalid
    if (typeof obj !== 'string') {
      this.assert(
        false,
        'expected #{this} to be a JSON string',
        'expected #{this} not to be a JSON string'
      )
      return
    }
    try {
      parsed = JSON.parse(obj)
    } catch (err) {
      invalid = true
    }
    this.assert(
      !invalid,
      'expected #{this} to be valid JSON',
      'expected #{this} not to be valid JSON'
    )
    this._obj = parsed
  })
}
