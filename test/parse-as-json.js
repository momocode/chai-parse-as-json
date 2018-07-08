'use strict'

var chai = require('chai')
var expect = chai.expect

chai.use(require('../index.js'))

describe('parse-as-json', function () {
  it('should accept a JSON string encoding an object and chain correctly', function () {
    expect('{}').to.parse.as.json.to.deep.equal({})
  })
  it('should accept a JSON string encoding an integer and chain correctly', function () {
    expect('0').to.parse.as.json.to.equal(0)
  })
  it('should fail if input is not a string', function () {
    expect(1).not.to.parse.as.json
  })
  it('should fail if input is not valid JSON', function () {
    expect('invalid-json').not.to.parse.as.json
  })
  it('should chain correctly with negation', function () {
    expect('invalid-json').not.to.parse.as.json.and.to.equal('invalid-json')
  })
})
