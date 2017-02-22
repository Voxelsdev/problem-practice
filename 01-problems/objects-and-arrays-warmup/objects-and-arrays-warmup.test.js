window.onload = function() {
  const expect = chai.expect;
  mocha.setup('tdd');

  suite('objects-and-arrays-warmup', function(){

    suite('first array problem', function(){
      test('should be an array with 1-5 printed out', function() {
          expect(array).to.deep.equal([1,2,3,4,5]);
      });
    });

    suite('second array problem', function() {
      test('should have 5 in 5th index of array', function() {
          expect(arrayTwo).to.deep.equal([0,0,0,0,0,5,0]);
      });
    });

    suite('third array problem', function() {
      test('should have a length of three', function() {
        expect(arrayThree).to.have.lengthOf(3);
      });
      test('should have three empty nested arrays', function() {
          expect(arrayThree[0]).to.be.an('array'); //does this work?
          expect(arrayThree[0]).to.be.empty; //does this work?
          expect(arrayThree[1]).to.be.an('array'); //does this work?
          expect(arrayThree[1]).to.be.empty; //does this work?
          expect(arrayThree[2]).to.be.an('array'); //does this work?
          expect(arrayThree[2]).to.be.empty; //does this work?
      });
    });

    suite('fourth array problem', function() {
      test('should have a length of three', function() {
        expect(arrayFour).to.have.lengthOf(3);
      });
      test('should have a string at index 0 with length 3', function() {
        expect(arrayFour[0]).to.be.a('string');
        expect(arrayFour[0]).to.have.lengthOf(3);
      });
      test('should have an empty object at index 1', function() {
        expect(arrayFour[1]).to.be.an('object');
        expect(arrayFour[1]).to.be.empty;
      });
      test('should be a number at index 2', function() {
        expect(arrayFour[2]).to.be.a('number');
      });
    });

    suite('first object problem', function() {
      test('should have a key value pair of foo:"bar"', function() {
        expect(object).to.have.property('foo','bar');
      });
    });

    suite('second object problem', function() {
      test('should have a key of nested with a value of an empty object', function () {
          expect(objectTwo).to.have.property('nested');
          expect(objectTwo).to.have.property('nested').that.is.an('object');
          expect(objectTwo.nested).to.be.empty;
      });
    });

    suite('third object problem', function() {
      test('has property superNested that is a object with key nested and value data', function() {
        expect(objectThree).to.have.property('superNested').that.is.an('object');
        expect(objectThree).to.have.property('superNested').that.is.an('object').that.deep.equals({nested: 'data'});
      });
    });

    suite('fourth object problem', function() {
      test('has arrayThree and arrayFour as properties and values', function() {
          expect(objectFour).to.have.property('arrayThree').that.is.an('array').that.deep.equals(arrayThree);
          expect(objectFour).to.have.property('arrayTwo').that.is.an('array').that.deep.equals(arrayTwo);
      });
    });
  });

  mocha.run();

}
