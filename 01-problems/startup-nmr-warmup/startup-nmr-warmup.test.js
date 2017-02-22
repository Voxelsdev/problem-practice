
window.onload = function() {
  const expect = chai.expect;
  mocha.setup('tdd');

  suite('startup-nmr-warmup', function() {
    test('all spaces replaced with underscores', function(){
      expect(namer(' ')).to.equal('_');
      expect(namer('  ')).to.equal('__');
      expect(namer('   ')).to.equal('___');
      expect(namer('bc bc bc')).to.equal('bc_bc_bc');
      expect(namer('bc  bc  bc')).to.equal('bc__bc__bc');
      expect(namer(' bc ')).to.equal('_bc_');
    });

    test('all letters should be lowercas', function(){
      expect(namer('RRRRRR')).to.equal('rrrrrr');
      expect(namer('TTTTTT')).to.equal('tttttt');
      expect(namer('YYYYYY')).to.equal('yyyyyy');
      expect(namer('SSSSSS')).to.equal('ssssss');
    });

    test('all vowels should be removed', function(){
      expect(namer('google')).to.equal('ggl');
      expect(namer('yahoo')).to.equal('yh');
      expect(namer('microsoft')).to.equal('mcrsft');
      expect(namer('galvanize')).to.equal('glvnz');
    });

    test('all requirements together', function(){
      expect(namer('we rock')).to.equal('w_rck');
      expect(namer('all solutions')).to.equal('ll_sltns');
      expect(namer('seashells by the sea')).to.equal('sshlls_by_th_s');
    })
  });

  mocha.run();
}
