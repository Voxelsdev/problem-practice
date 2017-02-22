var assert = require('chai').assert
var expect = require('chai').expect
var spellWithChemestry = require('../solution')

describe('Spelling With Chemistry', function() {
  it('should return the string spelled in element symbols', function() {
    expect(spellWithChemestry('bacon')).to.be.oneOf(['BaCoN', 'BAcON', 'BaCON'])
    expect(spellWithChemestry('genius')).to.be.oneOf(['GeNIUS', 'GeNiUS'])
    assert.equal(spellWithChemestry('functions'), 'FUNCTiONS');
    expect(spellWithChemestry('poison')).to.be.oneOf(['POISON', 'PoISON'])
    expect(spellWithChemestry('sickness')).to.be.oneOf(['SiCKNEsS', 'SICKNEsS', 'SiCKNeSS', 'SICKNeSS'])
    assert.equal(spellWithChemestry('ticklish'), 'TiCKLiSH');
    assert.equal(spellWithChemestry('rogerjakescott'), null);
  });
});
