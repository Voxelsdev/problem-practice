// Write a function called finalText that takes in an array of commands.
// A command is one of the following:
//
// { command: 'write', text: STRING }
// { command: 'undo' }
// The array of commands follows an order of commands issued to an editor.
// For example, given the following input:
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' }
// ]
// The function would produce 'HelloWorld'. This because we first wrote "Hello",
// and then we wrote "World" (no spaces or newlines in between)
//
// The undo command undoes the last write command. For example, given:
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' }
// ]
// The function would produce just 'Hello'. This is because it wrote the first two
// commands, and then it undo-ed the last write command. You can undo multiple times too. For example, given the input:
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' },
//   { command: 'undo' }
// ]
// The function would produce the empty string (''). This is because it wrote the first
// two commands, and then it undid each command. If there are too many undo's throw an error.
// The following example would throw an error.
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' },
//   { command: 'undo' },
//   { command: 'undo' }
// ]

// To test:
// cd 04-undo
// npm install
// npm test

const undo = function(commands){

}



module.exports = undo;
