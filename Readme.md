# codemirror-persist

Codemirror plugin for persisting buffers in a local storage

## Usage

```js
// require plugin
var persist = require("codemirror-persist")

// Install plugin
persist(CodeMirror)

var myCodeMirror = CodeMirror(document.body, {
  // ...
  persist: true // enable buffer persistence
})
```

## Install

    npm install codemirror-persist
