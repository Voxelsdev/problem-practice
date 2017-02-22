var assert = require('chai').assert
var spellWithChemestry = require('../solution')

describe('Spelling With Chemistry', function() {
  it('should return the string spelled in element symbols with element names', function() {
    assert.equal(spellWithChemestry('bacon'), 'BAcON (Boron Actinium Oxygen Nitrogen)');
    assert.equal(spellWithChemestry('genius'), 'GeNIUS (Germanium Nitrogen Iodine Uranium Sulfur)');
    assert.equal(spellWithChemestry('functions'), 'FUNCTiONS (Fluorine Uranium Nitrogen Carbon Titanium Oxygen Nitrogen Sulfur)');
    assert.equal(spellWithChemestry('poison'), 'POISON (Phosphorus Oxygen Iodine Sulfur Oxygen Nitrogen)');
    assert.equal(spellWithChemestry('sickness'), 'SiCKNEsS (Silicon Carbon Potassium Nitrogen Einsteinium Sulfur)');
    assert.equal(spellWithChemestry('ticklish'), 'TiCKLiSH (Titanium Carbon Potassium Lithium Sulfur Hydrogen)');
    assert.equal(spellWithChemestry('rogerjakescott'), null);
  });
});
