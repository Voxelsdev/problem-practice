const expect = require('chai').expect;
const validate = require('../problem.js');


describe('03-matching tests', function(){
  it('should return true if the string is empty', function(){
    expect(validate('')).to.be.true;
  });

  it('should return true of all openers have closers', function(){
    expect(validate("{}")).to.be.true;
    expect(validate("()")).to.be.true;
    expect(validate("[]")).to.be.true;
    expect(validate("{}{}")).to.be.true;
    expect(validate("()()")).to.be.true;
    expect(validate("[][]")).to.be.true;
    expect(validate("{()}{}")).to.be.true;
    expect(validate("{()}{[]}")).to.be.true;
  });

  it('should return false if all openers do not have closers', function(){
    expect(validate("{")).to.be.false;
    expect(validate("(")).to.be.false;
    expect(validate("[")).to.be.false;
    expect(validate("{{}}}}")).to.be.false;
    expect(validate("[[]]]]")).to.be.false;
    expect(validate("(())))")).to.be.false;
  });
});
