`use strict`


const every = require('./problem.js');
const expect = require('chai').expect;


describe('array every', function(){
  it('should return a boolean', function(){
    const fn = function(element){ return element % 2 === 0};
    expect(every([1], fn)).to.equal(false);
    expect(every([2], fn)).to.equal(true);
  });

  it('should true if every element in an array is true according to the function that is passed in', function(){
    const fn = function(element){return element % 2 === 0};
    expect(every([1,3,5,7,9],fn)).to.equal(true);
  });

  it('should be false of only one element is false according to the function that is passed in', function(){
    const fn = function(element){return element % 2 === 0};
    expect(every([1,3,5,7,8],fn)).to.equal(false);
  })
})
