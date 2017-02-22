(() => {

  'use strict'

  window.onload = function() {
    const expect = chai.expect;
    mocha.setup('tdd');

    suite('conference traveller warmup', () => {
      test("should return an offered city that has not been visited", () => {
        citiesVisited = ['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'];
        citiesOffered = ['Stockholm','Paris','Melbourne'];
        expect(program(citiesVisited,citiesOffered)).to.be.equal("Paris")

        citiesVisited = ['Bigfork', 'North Scituate', 'Lake Success', 'Willsboro', 'McConnellsburg'];
        citiesOffered = ['Bigfork', 'North Scituate', 'Lake Success', 'Willsboro', 'McConnellsburg', 'Happytown'];
        expect(program(citiesVisited,citiesOffered)).to.be.equal("Happytown")

      });
      test("should return no city if all are visited", () => {
        citiesVisited = ["Grazierville", "Covelo", "Ridge Wood Heights", "Onancock", "Winthrop Town"];
        citiesOffered = ["Grazierville", "Covelo", "Ridge Wood Heights", "Onancock", "Winthrop Town"];
        expect(program(citiesVisited,citiesOffered)).to.be.equal("No worthwhile conferences this year!")
      });
    });

    mocha.run();
  }
})();
