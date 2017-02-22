
window.onload = function() {
  const expect = chai.expect;
  mocha.setup('tdd');

  suite('factorial-warmup', function() {
    test('factorial test', function(){
      expect(factorial(2)).to.equal(2);
      expect(factorial(3)).to.equal(6);
      expect(factorial(4)).to.equal(24);
      expect(factorial(5)).to.equal(120);
      expect(factorial(6)).to.equal(720);
    });
    test('if argument is 0, return 1', function(){
      expect(factorial(0)).to.equal(1);
    });
    test('if argument is negative, return strign "undefined"', function(){
      expect(factorial(-1)).to.equal('undefined');
      expect(factorial(-10)).to.equal('undefined');
      expect(factorial(-100)).to.equal('undefined');
      expect(factorial(-1000)).to.equal('undefined');
    });
  });

  mocha.run();
}
