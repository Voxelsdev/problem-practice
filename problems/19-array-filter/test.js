const filter = require('./problem.js');
const expect = require('chai').expect;


describe('array filter', function(){
  it('should return an array', function(){
    const fn = function(a){return a < 1};
    expect(Array.isArray(filter([], fn))).to.be.true;
  });
  it('should filter an array based the return value of the callback fn', function(){
    const array = [1,2,3,4,5,6];
    const fn = function(a){return a <= 3};
    expect(filter(array,fn)).to.deep.equal([1,2,3]);
  })
})
