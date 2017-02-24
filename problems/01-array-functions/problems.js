'use strict'

// Write a function named map that takes two arguments. arr (array) callback (function)
//
// Return a new array where each element of arr is transformed by the callback function and the result is pushed into the new array.
//
// For example:
//
// const decimalNumber = [0.01, 2, 9.89, Math.PI];
//
// const rounded = map(decimalNumber, function(num) {
//   return Math.round(num);
// });
//
// console.log(rounded); // [0, 2, 10, 3]

function map(arr, fn){

}

// array filter
// Create a function named filter that takes an array and a function.
// return a new array that constains every item form the original array
// that returned true when passed in to the functions.
//
// To test:
// npm test 01-array-filter/test.js

const filter = function(array, fn) {

}

// array reduce
// create a function name `reduce` that takes in an array, a function, and a place to reduce the array against.
// It should return an accumulation of the items in the array that has been processed
// by the provided function.
//
// to test:
// npm test 02-array-reduce/test.js

const reduce = function(array, fn, acc){

}

// array every
// create a function named `every` that takes an array and a function
// it should return true if and only if the passed function returns true
// for ALL of the elements in the array
//
// To test:
// npm test 03-array-every/test.js

const every = function(array, fn){

}

// array some
//
// create a function named `some` that takes an array and a function.
// it should return true if any of the array elements returns true when
// passed as an argument to the function. It should return false, if and only if
// all the elements return false when passed as arguments to the function.
//
// To test:
// npm test 04-array-some/test.js

const some = function(array, fn){

}

module.exports = { map, filter, reduce, every, some };
