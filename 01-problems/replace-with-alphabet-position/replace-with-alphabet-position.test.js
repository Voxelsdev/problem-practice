window.onload = function() {
  const expect = chai.expect;
  mocha.setup('tdd');

  suite('replace-with-alphabet-position', function() {
    suite("alphabet position function", function() {
      test('when a string is passed in, expect each letter to be replaced with its numerical position in the alphabet', function() {
        expect(alphabetPosition("aba")).to.be.equal("1 2 1")
        expect(alphabetPosition("fish")).to.be.equal("6 9 19 8")
        expect(alphabetPosition("The sunset sets at twelve o' clock.")).to.be.equal("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
        expect(alphabetPosition("so long and thanks for all the fish")).to.be.equal("19 15 12 15 14 7 1 14 4 20 8 1 14 11 19 6 15 18 1 12 12 20 8 5 6 9 19 8")
      });
    });
  });

  mocha.run();
}
