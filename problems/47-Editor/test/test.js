const Editor = require('../Editor')
const expect = require('chai').expect

describe('Editor', function () {

  // Part 1
  it("allows users to write text", function () {
    var editor = new Editor()
    editor.write("Hello - codez")
    expect(editor.toString()).to.equal("Hello - codez")

    editor.write(" moar")
    expect(editor.toString()).to.equal("Hello - codez moar")
  })

  // Part 2
  // it("allows users to undo writes", function () {
  //   var editor = new Editor()
  //   editor.write("Hello - codez")
  //   expect(editor.toString()).to.equal("Hello - codez")
  //   editor.write("Moar stuff")
  //   expect(editor.toString()).to.equal("Hello - codezMoar stuff")
  //   editor.write("Even more")
  //   expect(editor.toString()).to.equal("Hello - codezMoar stuffEven more")
  //
  //   editor.undo()
  //   expect(editor.toString()).to.equal("Hello - codezMoar stuff")
  //
  //   editor.undo()
  //   expect(editor.toString()).to.equal("Hello - codez")
  //
  //   editor.undo()
  //   expect(editor.toString()).to.equal("")
  // })

  // Part 3
  // it("allows users to find and replace", function () {
  //   var editor = new Editor()
  //   editor.write("foo stuff")
  //   editor.write(" other foo")
  //
  //   editor.replace("foo", "bar")
  //   expect(editor.toString()).to.equal("bar stuff other bar")
  // })

  // Part 4
  // it("allows undo replaces", function () {
  //   var editor = new Editor()
  //   editor.write("foo stuff")
  //   editor.write(" other foo")
  //
  //   editor.replace("foo", "bar")
  //   expect(editor.toString()).to.equal("bar stuff other bar")
  //
  //   editor.undo()
  //   expect(editor.toString()).to.equal("foo stuff other foo")
  //
  //   editor.undo()
  //   expect(editor.toString()).to.equal("foo stuff")
  // })

  // Part 5
  // it("allows users to redo", function () {
  //   var editor = new Editor()
  //   editor.write("foo stuff")
  //   editor.write(" other foo")
  //   editor.replace("foo", "bar")
  //   expect(editor.toString()).to.equal("bar stuff other bar")
  //
  //   editor.undo()
  //   expect(editor.toString()).to.equal("foo stuff other foo")
  //
  //   editor.undo()
  //   expect(editor.toString()).to.equal("foo stuff")
  //
  //   editor.redo()
  //   expect(editor.toString()).to.equal("foo stuff other foo")
  //
  //   editor.redo()
  //   expect(editor.toString()).to.equal("bar stuff other bar")
  // })

})
