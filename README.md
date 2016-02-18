
Simple port forward for incoming HTTP requests. Built for [node](http://nodejs.org).

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
  
## Installation

```bash
$ npm install http-port-forward
```

## API

```js
const forward = require('http-port-forward');

// forward all local 1088 port http requests to 88 port.
forward(1088, 88);
```

### forward(portForm, portTo, isPrivateAccess)

- **portForm** `Number` - Required
- **portTo** `Number` - Required
- **isPrivateAccess** `Boolean` - Optional

## License

MIT(LICENSE)

[npm-image]: https://img.shields.io/npm/v/http-port-forward.svg
[npm-url]: https://npmjs.org/package/http-port-forward
[downloads-image]: https://img.shields.io/npm/dm/http-port-forward.svg
[downloads-url]: https://npmjs.org/package/http-port-forward