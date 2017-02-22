window.onload = function() {
  const expect = chai.expect;
  mocha.setup('tdd');


  suite('Q1', function() {
    test('should be touch', function() {
        expect(answer1).to.be.equal('touch');
    });
  });

  suite('Q2', function() {
    test('should be mkdir', function() {
      expect(answer2).to.be.equal('mkdir');
    });
  });

  suite('Q3', function() {
    test('should be cd ..', function() {
      expect(answer3).to.be.equal('cd ..');
    });
  });

  suite('Q4', function() {
    test('should be pwd', function() {
      expect(answer4).to.be.equal('pwd');
    });
  });

  suite('Q5', function() {
    test('should be |', function() {
      expect(answer5).to.be.equal('|');
    });
  });

  suite('Q6', function() {
    test('should be rm -rf', function() {
      expect(answer6).to.be.equal('rm -rf');
    });
  });

  suite('Q7', function() {
    test('should be ls -a', function() {
      expect(answer7).to.be.equal('ls -a');
    });
  });

  suite('Q8', function() {
    test('should be which', function() {
      expect(answer8).to.be.equal('which');
    });
  });

  suite('Q9', function() {
    test('should be man', function(){
      expect(answer9).to.be.equal('man');
    });
  });

  suite('Q10', function() {
    test('should be echo hello world > myText.txt', function() {
      expect(answer10).to.be.equal('echo hello world > myText.txt');
    });
  });

  mocha.run();
}
