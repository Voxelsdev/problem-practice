let expect = require('chai').expect;
let lib= require('../../01-array-functions/problems.js');

describe('#map', () => {
  it('should run a function for every item in an array', () => {
    expect(lib.map([1,2,3], num => num * 2)).to.deep.equal([2,4,6]);
    expect(lib.map([1,2,3], num => num + 1)).to.deep.equal([2,3,4]);
    expect(lib.map([1,2,3], num => num - 1)).to.deep.equal([0,1,2]);
  });
});

describe('#filter', () => {
  it('should return an array', () => {
    const fn = a => a < 1;

    expect(Array.isArray(lib.filter([], fn))).to.be.true;
  });

  it('should filter an array based on the return value of the callback fn', () => {
    const arr = [1,2,3,4,5,6];
    const fn = a => a <= 3;

    expect(lib.filter(arr, fn)).to.deep.equal([1,2,3]);
  });
});

describe('#reduce', () => {
  it('should return the same type as the accumulator', () => {
    const arr = [1,2,3,4];
    const fn = (acc, element) => acc + element;
    const acc = 0;

    expect(typeof lib.reduce(arr, fn, acc)).to.be.equal(typeof acc);

    const otherfn = (acc, element) => { acc.push(element); return acc; };
    const otheracc = [];

    expect(Array.isArray(reduce(array, otherfn, otheracc))).to.be.equal(Array.isArray(otheracc));
  });
});

describe('#every', () => {
  it('should return a boolean', () => {
    const fn = element => element % 2 === 0;

    expect(lib.every([1], fn)).to.equal(false);
    expect(lib.every([2], fn)).to.equal(true);
  });

  it('should true if every element in an array is true according to the function that is passed in', () => {
    const fn = element => element % 2 === 0;

    expect(lib.every([1,3,5,7,9], fn)).to.equal(true);
  });

  it('should be false of only one element is false according to the function that is passed in', () => {
    const fn = element => element % 2 === 0;

    expect(lib.every([1,3,5,7,8], fn)).to.equal(false);
  });
});

describe('#some', () => {
  it('should return a boolean', () => {
    const fn = element => element % 2 === 1;

    expect(typeof lib.some([1], fn)).to.equal(typeof false);
    expect(typeof lib.some([2], fn)).to.equal(typeof true);
  });

  it('should true if an element in an array is true according to the function that is passed in', () => {
    const fn = element => element % 2 === 1;

    expect(lib.some([2,4,6,8,9],fn)).to.equal(true);
  });

  it('should be false if  all elements are false according to the function that is passed in', () => {
    const fn = element => element % 2 === 1;

    expect(lib.some([2,4,6,8],fn)).to.equal(false);
  });
});
