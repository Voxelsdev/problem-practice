`use strict`


const salesPersonSummary = require('./problem.js');
const expect = require('chai').expect;



describe('sale person summary', function(){
  it('should return an object', () => {
    expect(typeof salesPersonSummary()).to.equal('object');
  });

  it('should return a summary of sales', () => {
    expect(salesPersonSummary()).to.deep.equal({ Tom: 7055, Carol: 10565, Samantha: 14375 });
  });
});
