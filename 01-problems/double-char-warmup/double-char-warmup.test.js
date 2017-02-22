(() => {

  'use strict'

  window.onload = function() {
    const expect = chai.expect;
    mocha.setup('tdd');

    suite('double char warmup', function() {

      test('it should an error message if argument is not a string', () => {
        expect(doubleChar(false)).to.be.equal('Ruh roh! That isn\'t a string!');
        expect(doubleChar(44)).to.be.equal('Ruh roh! That isn\'t a string!');
        expect(doubleChar(undefined)).to.be.equal('Ruh roh! That isn\'t a string!');
        expect(doubleChar(NaN)).to.be.equal('Ruh roh! That isn\'t a string!');
      });

      test('it should return a string with each character doubled', () => {
        expect(doubleChar('Hello World')).to.be.equal('HHeelllloo  WWoorrlldd');
        expect(doubleChar('Tonight we\'re gonna party like it\'s 1999')).to.be.equal('TToonniigghhtt  wwee\'\'rree  ggoonnnnaa  ppaarrttyy  lliikkee  iitt\'\'ss  11999999');
      });

    });

    mocha.run();
  }
})();
