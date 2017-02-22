var assert = require('chai').assert
var anotherParseInt = require('../problem')

describe('Another parseInt', function() {
  it('should return an integer if the string can be parse and NaN if it cannot', function() {
    assert.equal(anotherParseInt("123"), 123);
    assert.equal(anotherParseInt("8"), 8);
    assert.equal(anotherParseInt("-4444"), -4444);
    assert.isNaN(anotherParseInt("12-34"));
    assert.isNaN(anotherParseInt(""));
    assert.isNaN(anotherParseInt("123.45"));
  });
});
