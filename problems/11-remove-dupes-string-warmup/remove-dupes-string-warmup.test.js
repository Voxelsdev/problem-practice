window.onload = function() {
  const expect = chai.expect;
  mocha.setup('tdd');

  suite('remove-dupes-string-warmup', function(){

    suite('dupeRemover function', function() {
      test('should return a string', function() {
        expect(removeDupes('AABB')).to.be.a('string');
      });
      test('should return a string without duplicates', function() {
        expect(removeDupes('AABB')).to.be.equal('AB');
        expect(removeDupes('AaAaBbBb')).to.be.equal('AaBb');
        expect(removeDupes('cAtCaT')).to.be.equal('cAtCaT');
      });
    });
    suite('dupeRemoverCI function', function() {
      test('should return a string', function() {
        expect(removeDupesCI('AABB')).to.be.a('string');
      });
      test('should return a string with no dupes and is case insensitive', function() {
        expect(removeDupesCI('AABB')).to.be.equal('AB');
        expect(removeDupesCI('AaAaBbBb')).to.be.equal('AB');
        expect(removeDupesCI('cAtCaT')).to.be.equal('cAt');
      });
    });
  });

  mocha.run();

}
