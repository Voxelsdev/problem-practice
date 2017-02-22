// We have a list of the daily average temperatures of different European towns.
//
//     { Hamburg:   [14,15,16,14,18,17,20,22,21,18,19,23],
//       Munich:    [16,17,19,20,21,23,22,21,20,19,24,23],
//       Madrid:    [24,23,20,24,24,23,21,22,24,20,24,22],
//       Stockholm: [16,14,12,15,13,14,14,12,11,14,15,14],
//       Warsaw:    [17,15,16,18,20,20,21,18,19,18,17,20] }
//
// We want to sort these towns into two groups: "warm" and "hot". "warm" should
// be towns that have at least one day with a temperature greater than 19. "hot"
// should be towns where the temperature is greater than 19 every day. The result
// should look like this:
//
//     {  hot: [ "Hottown" ],
//       warm: [ "Town1", "Town2", "Town3" ] }
//
//  Hint: "every" temperature must be above 19 for it to be hot
//        "some" temperatures must be above 19 (but not all), for it to be warm.
//
// To test:
// npm test 06-temp-gauge/test.js


const tempGauge = function(towns){

}


module.exports = tempGauge;
