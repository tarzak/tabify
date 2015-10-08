# Tabify
Simple tabs module.

## API

What you should do first is create new instance of `tabify` with 

```js
var tabify = Tabify;
```

Than you could just use API as it is.

### tabify.add(tabObject)

Add new tab object which stores needed information to tabs list.

### tabify.remove(fileName)

Remove tab from tabs list by name of file.

### tabify.get([fileName])

Return specific tab or all tabs in case of no argument. FileName should be string.

## How to use?

```js
var Tabify = require('tabify'),
    tabify = new Tabify(),
    tabObject = {
      name: 'fileName',
      path: 'path',
      data: 'hello world',
      row: '25',
      column: '11'
    },
    fileName = 'simpleName';


tabify.add(tabObject);

tabify.get();

tabify.remove(fileName);

```

## License

MIT