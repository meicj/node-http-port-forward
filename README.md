
Simple port forward for incoming HTTP requests. Built for node.js.

## Installation

```
npm install http-port-forward
```

## API

```js
const forward = require('http-port-forward');

// forward all local 1088 port http requests forward to 88 port.
forward(1088, 88);
```

### forward(portForm, portTo, isPrivateAccess)

- **portForm** `Number` - Required
- **portTo** `Number` - Required
- **isPrivateAccess** `Boolean` - Optional

## License

MIT
