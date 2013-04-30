"use strict";

function onChange(editor) {
  localStorage[window.location.href.split("#")[0]] = editor.getValue()
}

function setup(editor, value) {
  /**
  Takes editor and enables persists changes to the buffer across the sessions.
  **/
  if (value) {
    var address = window.location.href.split("#")[0]
    var persisted = localStorage[address] || editor.getValue()
    editor.setValue(persisted)
    editor.on("change", onChange)
  } else {
    editor.off("change", onChange)
  }
}

function plugin(CodeMirror) {
  CodeMirror.defineOption("persist", false, setup)
}

module.exports = plugin
