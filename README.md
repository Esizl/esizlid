## Quickstart

To create a random uuid using esizlid...

**1. Install**

```shell
npm install esizlid
```

**2. Create a ID** (CommonJS syntax)

```javascript
const id = require('esizlid');
id(9); // Outputs: 'MwBxEFLg'
```

**3. Using Custom Characters**
```javascript
const id = require('esizlid');
id(9, 'abc'); // Outputs: 'ccbbbcca'
```

```javascript
const id = require('esizlid');
id(9, 'abc123'); // Outputs: '12cc2a13'
```