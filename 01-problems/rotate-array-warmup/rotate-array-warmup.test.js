
window.onload = function() {
  const expect = chai.expect;
  mocha.setup('tdd');

  suite('rotate-array-warmup', function() {
    test('should return an array', function() {
      var arr = [1,2,3,4,5,6];
      expect(rotate(arr,1)).to.be.an('array');
    });

    test('should return rotated array', function() {
      expect(rotate([1,2,3,4,5,6,7],2)).to.be.eql([6,7,1,2,3,4,5]);
      expect(rotate([1,2,3,4,5,6,7],0)).to.be.eql([1,2,3,4,5,6,7]);
      expect(rotate([1,2,3,4,5,6,7],7)).to.be.eql([1,2,3,4,5,6,7]);
      expect(rotate([1,2,3,4,5,6,7],4)).to.be.eql([4,5,6,7,1,2,3,]);
    });
  });

  mocha.run();
}
