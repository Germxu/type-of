# @Finnn/type

### Check out object real type

## Installation

```bash
npm install @finnn/type
```
## Usage

```javascript

const typeOf = require('@finnn/type') //with nodejs

or

import typeOf from '@finnn/type' //with webpack
```

### Example:

```javascript
typeOf(null),               // null
typeOf(()=>{}),             // function
typeOf(undefined),          // undefined
typeOf(new Set()),          // set
typeOf(new Map()),          // map
typeOf(new Date()),         // date
typeOf(new Array()),        // array
typeOf(new Error()),        // error
typeOf(new RegExp()),       // regexp
typeOf(new WeakMap()),      // weakmap
typeOf(new WeakSet()),      // weakset
typeOf(new Promise(() => {})),  // promise
typeOf(new ArrayBuffer()),      // arraybuffer
typeOf(new Int8Array()),        // int8array
typeOf(new Uint8Array()),       // uint8array
...
```

