`use strict`


const threshold = require('./problem.js');
const expect = require('chai').expect;


describe('array threshold', function(){
  it('should return a boolean', function(){
    const fn = function(element){ return element % 2 === 0}; // true if even, false if odd
    expect(typeof threshold([2,4,3,5], fn, 3)).to.equal(typeof false);
    expect(typeof threshold([2,4,6,8], fn, 3)).to.equal(typeof true);
  });

  it('should true if an element in an array is true according to the function that is passed in', function(){
    const fn = function(element){return element % 2 === 0}; // true if even, false if odd
    expect(threshold([2,4,6,8,9],fn,1)).to.equal(true);
    expect(threshold([2,4,6,8,9],fn,2)).to.equal(true);
    expect(threshold([2,4,6,8,9],fn,3)).to.equal(true);
    expect(threshold([2,4,6,8,9],fn,4)).to.equal(true);
    expect(threshold([2,4,6,8,9],fn,5)).to.equal(false);

    expect(threshold([1,3,5,7,8],fn,1)).to.equal(true);
    expect(threshold([1,3,5,7,8],fn,2)).to.equal(false);
    expect(threshold([1,3,5,7,8],fn,3)).to.equal(false);
    expect(threshold([1,3,5,7,8],fn,4)).to.equal(false);
    expect(threshold([1,3,5,7,8],fn,5)).to.equal(false);

  });
});
