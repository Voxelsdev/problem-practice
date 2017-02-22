
window.onload = function() {
  const expect = chai.expect;
  mocha.setup('tdd');

  suite('same-digits-warmup', function() {
    test('should return a string of length 1', function() {
      expect(reverseVowels('a')).to.be.equal('a');
    });
    test('should return a string if there is only one vowel', function() {
      expect(reverseVowels('abc')).to.be.equal('abc');
    });
    test('should reverse the vowels of a string', function() {
      expect(reverseVowels('hello')).to.be.equal('holle');
      expect(reverseVowels('hElLo')).to.be.equal('holLE');
      expect(reverseVowels('wookiE')).to.be.equal('wEikoo');
    });

  });

  mocha.run();
}
