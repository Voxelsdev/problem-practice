(() => {

  'use strict'

  window.onload = function() {
    const expect = chai.expect;
    mocha.setup('tdd');

    suite('word scrambler warmup', () => {
      test('words are scramled',  () => {
        expect(scramble('')).to.be.equal('')
        expect(scramble('')).to.be.equal('')
        expect(scramble('')).to.be.equal('')
      });
    });

    mocha.run();
  }
})();
