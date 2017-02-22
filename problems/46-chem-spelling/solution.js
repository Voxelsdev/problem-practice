/*
The IUPAC Periodic Table of the Elements is one of the most recognizable features of modern chemistry - the organization of all known chemical elements along with some of their most fundamental properties, together with their names and symbols. Today we're going to use that as we spell some words.

https://iupac.org/what-we-do/periodic-table-of-elements/

I've provided a json file representing the elements and their abbreviated forms. It's your job to write a function called spellWithChemestry that takes a string as input and returns the same strings but spelled using element symbols from the periodic table. If the string cannot be spelled with these symbols return null.

For example:
spellWithChemestry('genius') // 'GeNiUS'
spellWithChemestry('bacon') // 'BAcON'
spellWithChemestry('rogerjakescott') // null

run: npm test test/test.js

Bonus: In the output, include the list of element names used to spell the string
spellWithChemestry('bacon') // 'BAcON (Boron Actinium Oxygen Nitrogen)'

run: npm test test/bonus.js
*/

const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json'))

// matches start of string with element symbol
const findSymbol = function(str) {
  return data.find((el) => {
    const sym = el.symbol.toLowerCase()
    return str.startsWith(sym)
  })
}

const spellWithChemestry = function(str) {
  let resultStr = ''
  let strLeft = str

  while (strLeft.length) {
    const match = findSymbol(strLeft)
    if (!match) return null
    resultStr += match.symbol
    strLeft = strLeft.slice(match.symbol.length)
  }

  return resultStr
}

// const spellWithChemestry = function(str) {
//   let resultStr = ''
//   const resultElems = []
//   let strLeft = str
//
//   while (strLeft.length) {
//     const match = findSymbol(strLeft)
//     if (!match) return null
//
//     resultStr += match.symbol
//     resultElems.push(match.element)
//     strLeft = strLeft.slice(match.symbol.length)
//   }
//
//   if (!resultElems.length) {
//     return null
//   }
//   return `${resultStr} (${resultElems.join(' ')})`
// }

module.exports = spellWithChemestry;
