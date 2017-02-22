
window.onload = function() {
  const expect = chai.expect;
  mocha.setup('tdd');

  suite('array-map-warmup', function() {
    test('it should run a function for every item in an array', function(){
      expect(map([1,2,3], function(num){return num * 2})).to.deep.equal([2,4,6]);
      expect(map([1,2,3], function(num){return num + 1})).to.deep.equal([2,3,4]);
      expect(map([1,2,3], function(num){return num - 1})).to.deep.equal([0,1,2]);
    })
  });

  mocha.run();
}
