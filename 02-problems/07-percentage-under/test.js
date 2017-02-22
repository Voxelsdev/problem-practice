`use strict`


const percentageUnder = require('./problem.js');
const expect = require('chai').expect;



describe('', function(){
  it('should return a number', () => {
    expect(typeof percentageUnder()).to.equal('number');
  });

  it('should return a number between 0 and 1', () => {
    expect(percentageUnder()).to.be.within(0,1);
  })

  it('should return the percentage of elements with balance lower than 0', (done) => {
    expect(percentageUnder()).to.equal(0.04);
    done();
  })
});
