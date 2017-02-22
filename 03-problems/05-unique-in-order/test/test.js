var expect = require('chai').expect;
var uniqueInOrder = require('../problem');

describe('uniqueInOrder', function() {
  it('should return an array without repeated side-by-side values while maintaing original order', function() {
    expect(uniqueInOrder('')).to.deep.equal([]);
    expect(uniqueInOrder('AAAABBBCCDAABBB')).to.deep.equal(['A', 'B', 'C', 'D', 'A', 'B']);
    expect(uniqueInOrder('ABBCcAD')).to.deep.equal(['A', 'B', 'C', 'c', 'A', 'D']);
    expect(uniqueInOrder('bBAAb')).to.deep.equal(['b', 'B', 'A', 'b']);
  });
});
