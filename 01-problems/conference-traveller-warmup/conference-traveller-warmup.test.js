(() => {

  'use strict'

  window.onload = function() {
    const expect = chai.expect;
    mocha.setup('tdd');

    suite('conference traveller warmup', () => {
      test("should return an offered city that has not been visited", () => {
        let citiesVisited = ['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'];
        let citiesOffered = ['Stockholm','Paris','Melbourne'];
        expect(conferencePicker(citiesVisited,citiesOffered)).to.be.equal("Paris")

         citiesVisited = ['Bigfork', 'North Scituate', 'Lake Success', 'Willsboro', 'McConnellsburg'];
         citiesOffered = ['Bigfork', 'North Scituate', 'Lake Success', 'Willsboro', 'McConnellsburg', 'Happytown'];
        expect(conferencePicker(citiesVisited,citiesOffered)).to.be.equal("Happytown")

      });
      test("should return no city if all are visited", () => {
        let citiesVisited = ["Grazierville", "Covelo", "Ridge Wood Heights", "Onancock", "Winthrop Town"];
        let citiesOffered = ["Grazierville", "Covelo", "Ridge Wood Heights", "Onancock", "Winthrop Town"];
        expect(conferencePicker(citiesVisited,citiesOffered)).to.be.equal("No worthwhile conferences this year!")
      });
    });

    mocha.run();
  }
})();
