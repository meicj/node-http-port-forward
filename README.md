
[![Build Status][build-status]][build-url] 
[![NPM Version][npm-version]][npm-url] 
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Gitter Chat][gitter-image]][gitter-url]

Simple port forward for incoming HTTP requests, cross-platform supported base on [Node.js](http://nodejs.org).
  
## Installation

```bash
$ npm install http-port-forward
```

## Quick Start

Use the code below to create a file named sample.js

```js
var forward = require('http-port-forward');

// forward all local 1088 port http requests to 88 port.
forward(1088, 88);
```

Run by `Node.js`. If you forward to port less than 1024 on Mac/Linux, you may need execute node by `sudo`

```bash
$ sudo node sample.js
```

Now you can use `http://localhost:88` to visit the page on `http://localhost:1088`

## API

### forward(portForm, portTo, options)

- **portForm** `Number` - Required, port NO. which you want to forward from
- **portTo** `Number` - Required, port NO. which you want to forward to
- **options** `Object` - Optional, options Config object passed to the forward
- **options.isPublicAccess** `Boolean` - Optional, if true the new port will be accessible for others

## License

MIT(LICENSE)

[build-status]: https://api.travis-ci.org/meicj/node-http-port-forward.svg?branch=master&style=flat
[build-url]: https://travis-ci.org/meicj/node-http-port-forward
[npm-version]: https://img.shields.io/npm/v/http-port-forward.svg?label=npm%20package
[npm-url]: https://npmjs.org/package/http-port-forward
[npm-downloads-image]: https://img.shields.io/npm/dm/http-port-forward.svg?label=npm%20downloads
[gitter-image]: https://badges.gitter.im/meicj/node-http-port-forward.svg
[gitter-url]: https://gitter.im/meicj/node-http-port-forward?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
