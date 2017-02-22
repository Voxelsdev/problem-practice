`use strict`


const tempGauge = require('./problem.js');
const expect = require('chai').expect;

const towns = { Hamburg:   [14,15,16,14,18,17,20,22,21,18,19,23],
                Munich:    [16,17,19,20,21,23,22,21,20,19,24,23],
                Madrid:    [24,23,20,24,24,23,21,22,24,20,24,22],
                Stockholm: [16,14,12,15,13,14,14,12,11,14,15,14],
                Warsaw:    [17,15,16,18,20,20,21,18,19,18,17,20] };


describe('tempGauge Tests', function(){
  it('should return an object with keys of "hot", and "warm"', function(){
    expect(tempGauge(towns).hasOwnProperty('hot')).to.equal.true;
    expect(tempGauge(towns).hasOwnProperty('warm')).to.equal.true;

  })
  it('get hot and warm towns', function(){
    expect(tempGauge(towns)).to.deep.equal({hot:['Madrid'],warm:['Hamburg', 'Munich', 'Warsaw']})
  });
});
