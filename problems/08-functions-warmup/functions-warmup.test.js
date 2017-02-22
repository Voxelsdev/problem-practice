window.onload = function() {
  const expect = chai.expect;
  mocha.setup('tdd');

  suite('command-line-warmup', function(){

    suite('squareMe function', function() {
      test('should output a squared value of a number', function() {
          expect(squareMe(2)).to.be.equal(4);
          expect(squareMe(3)).to.be.equal(9);
      });
    });

    suite('cubeMe function', function() {
      test('should output the cubed value of the input', function() {
          expect(cubeMe(3)).to.be.equal(27);
          expect(cubeMe(4)).to.be.equal(64);
          expect(cubeMe(0)).to.be.equal(0);
      });
    });

    suite('addTwoNumbers function', function() {
      test('should output the sum of 2 numbers', function() {
        expect(addTwoNumbers(1,2)).to.be.equal(3);
        expect(addTwoNumbers(3,4)).to.be.equal(7);
      });
    });

    suite('addManyNumbers function', function() {
      test('should output the sum of any number of parameters', function() {
        expect(addManyNumbers(1,2,3)).to.be.equal(6);
        expect(addManyNumbers(2,2,2,2,2,2)).to.be.equal(12);
        expect(addManyNumbers(0,2)).to.be.equal(2);
        expect(addManyNumbers(1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)).to.be.equal(1);
      });
    });

    suite('hoisting answer', function() {
      test('should be the function declaration', function() {
        expect(hoisting()).to.be.equal('a');
      });
    });

  });

  mocha.run();

}
