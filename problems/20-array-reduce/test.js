`use strict`


const reduce = require('./problem.js');
const expect = require('chai').expect;


describe('array reduce', function(){
  it('should return the same type as the accumulator', function(){
    const array = [1,2,3,4]
    const fn = function(acc, element){ return acc + element};
    const acc = 0;
    expect(typeof reduce(array, fn, acc)).to.be.equal(typeof acc);

    const otherfn = function(acc, element){ acc.push(element); return acc;};
    const otheracc = [];

    expect(Array.isArray(reduce(array, otherfn, otheracc))).to.be.equal(Array.isArray(otheracc));
  });
  it('should filter an array based the return value of the callback fn', function(){
    const array = [1,2,3,4];
    const fn = function(acc, element){return acc + element};
    expect(reduce(array,fn,0)).to.deep.equal(10);
  })
})
