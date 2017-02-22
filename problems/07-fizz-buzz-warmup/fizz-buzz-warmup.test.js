window.onload = function() {
  const expect = chai.expect;
  mocha.setup('tdd');

  suite('fizz-buzz-warmup', function() {

    let fb = fizzbuzz();

    suite('Number', function() {
      test('not divisible by 3 or 5 should be a number',function() {
        for(let i = 0; i < fb.length; i++){
          let num = i + 1;
          if(num % 3 && num % 5){
            expect(fb[i]).to.be.equal(num);
          }
        }
      })
    });

    suite('Fizz', function() {
      test('divisible by 3 prints fuzz', function() {
        for(let i = 0; i < fb.length; i++){
          let num = i + 1;
          if(!(num % 3) && num % 5){
            expect(fb[i]).to.be.equal("Fizz");
          }
        }
      });
    });
    suite('Buzz', function() {
      test('divisible by 5 prints Buzz', function() {
        for(let i = 0; i < fb.length; i++){
          let num = i + 1;
          if(!(num % 5) && num % 3){
            expect(fb[i]).to.be.equal("Buzz");
          }
        }
      });
    });

    suite('FizzBuzz', function() {
      test('divisible by 3 and 5 prints FizzBuzz', function() {
        for(let i = 0; i < fb.length; i++){
          let num = i + 1;
          if(!(num % 3) && !(num % 5)){
            expect(fb[i]).to.be.equal("FizzBuzz");
          }
        }
      });
    });
  });

  mocha.run();
}
