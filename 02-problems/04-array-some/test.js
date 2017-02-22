`use strict`


const some = require('./problem.js');
const expect = require('chai').expect;


describe('array some', function(){
  it('should return a boolean', function(){
    const fn = function(element){ return element % 2 === 1};
    expect(typeof some([1], fn)).to.equal(typeof false);
    expect(typeof some([2], fn)).to.equal(typeof true);
  });

  it('should true if an element in an array is true according to the function that is passed in', function(){
    const fn = function(element){return element % 2 === 1};
    expect(some([2,4,6,8,9],fn)).to.equal(true);
  });

  it('should be false if  all elements are false according to the function that is passed in', function(){
    const fn = function(element){return element % 2 === 1};
    expect(some([2,4,6,8],fn)).to.equal(false);
  })
})
