var assert = require('chai').assert;
var isRotation = require('../problem');

describe('string rotation', function() {
  it('should return true if string 2 is a rotation of string 1', function() {
    assert.equal(isRotation('bingo', 'ngobi'), true);
    assert.equal(isRotation('bobcat', 'catbo'), false);
    assert.equal(isRotation('angular', 'larangu'), true);
    assert.equal(isRotation('12345', '51234'), true);
  });
});
