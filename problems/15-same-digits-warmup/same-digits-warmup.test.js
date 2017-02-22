
window.onload = function() {
  const expect = chai.expect;
  mocha.setup('tdd');

  suite('same-digits-warmup', function() {
    test('should return a Boolean', function() {
      expect(sameDigits(23,42)).to.be.a('boolean');
    });
    test('should return false for number that are not equivalent', function() {
      expect(sameDigits(23,42)).to.be.false;
      expect(sameDigits(203,003)).to.be.false;
    });
    test('should return true for an equivalent number', function() {
      expect(sameDigits(23,32)).to.be.true;
      expect(sameDigits(20000003,32)).to.be.true;
    });
  });

  mocha.run();
}
