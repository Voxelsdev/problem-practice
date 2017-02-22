const expect = require('chai').expect;
const undo = require('../problem.js');


describe('04-undo', function(){
  it('should return the string that is passed in with the command "write"', function(){
    expect(undo([{command:'write', text:'hello'}])).to.equal('hello');
    expect(undo([{command:'write', text:'world'}])).to.equal('world');
  });
  it('should return a joined string of all the "write" commands', function(){
    expect(undo([
      {command:'write', text:'hello'},
      {command:'write', text:' '},
      {command:'write', text:'world'}
    ])).to.equal('hello world');

    expect(undo([
      {command:'write', text:'everyone'},
      {command:'write', text:' '},
      {command:'write', text:'wants'},
      {command:'write', text:' '},
      {command:'write', text:'to'},
      {command:'write', text:' '},
      {command:'write', text:'rule'},
      {command:'write', text:' '},
      {command:'write', text:'the'},
      {command:'write', text:' '},
      {command:'write', text:'world'}
    ])).to.equal('everyone wants to rule the world');
  });
  it('should undo "write" commands with the "undo" command', function(){
    expect(undo([
      {command:'write', text:'everyone'},
      {command:'write', text:' '},
      {command:'write', text:'wants'},
      {command:'write', text:' '},
      {command:'write', text:'to'},
      {command:'write', text:' '},
      {command:'write', text:'rule'},
      {command:'write', text:' '},
      {command:'write', text:'the'},
      {command:'write', text:' '},
      {command:'write', text:'world'},
      {command:'undo'},
      {command:'undo'}
    ])).to.equal('everyone wants to rule the');
  });

  it('should throw and error if the undo commands is run more times than the write command', function(){
    const u = undo.bind(null, [
      {command:'write', text:'everyone'},
      {command:'write', text:' '},
      {command:'undo'},
      {command:'undo'},
      {command:'undo'}
    ]);
    expect(u).to.throw('Nothing left to undo');
  });
})
