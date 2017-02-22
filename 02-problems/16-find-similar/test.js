
const findSimilar = require('./problem').findSimilar;
const expect = require('chai').expect;

describe('findSimilar function', function() {
  it('should return an array', function(){
    expect(findSimilar([1,2,false,[2,3],{foo:'bar'},[5,6],'hi'],[0,2,[5,6],true,'hi',2,1,{foo:'bar'},{bar:'foo'}])).to.be.an('array');
  });
  it('should return an empty array if no similarities', function() {
    expect(findSimilar([1,2,3,true],[4,5,6,false])).to.eql([]);
  });
  it('should return an array of similarites', function() {
    var answer = findSimilar([1,2,false,[2,3],{foo:'bar'},[5,6],'hi'],[0,2,[5,6],true,'hi',2,1,{foo:'bar'},{bar:'foo'}]);
    expect(answer).to.include.members([1,2,'hi']);
    expect(answer).to.deep.include.members([{foo:'bar'},[5,6]]);
  });
});
