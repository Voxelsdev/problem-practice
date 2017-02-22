var assert = require('chai').assert
var unfactorial = require('../problem')

describe('Unfactorial', function() {
  it('should return a number factorial or null of none exists', function() {
    assert.equal(unfactorial(120), '5!');
    assert.equal(unfactorial(5040), '7!');
    assert.equal(unfactorial(6), '3!');
    assert.equal(unfactorial(3628800), '10!');
    assert.equal(unfactorial(479001600), '12!');
    assert.equal(unfactorial(333), null);
    assert.equal(unfactorial(18), null);
    assert.equal(unfactorial(''), null);
    assert.equal(unfactorial(120.120), null);
    // assert.equal(unfactorial(-120), '-5!'); // uncomment if you dare
  });
});
