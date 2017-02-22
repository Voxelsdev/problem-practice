`use strict`


const salesPersonSummary = require('./problem.js');
const expect = require('chai').expect;



describe('sale person summary', function(){
  it('should return an object', () => {
    expect(typeof salesPersonSummary()).to.equal('object');
  });

  it('should return a summary of sales', () => {
    expect(salesPersonSummary()).to.deep.equal({ "2016-01-01": 7501, "2016-01-02": 7729, "2016-01-03": 16765 });
  });
});
