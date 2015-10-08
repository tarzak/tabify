# Tabify
Simple tabs module.

## API

What you should do first is create new instance of `tabify` with 

```js
var tabs = tabify();
```

Than you could just use API as it is.

### tabs.add(tabObject)

Add new tab object which stores needed information about files in tabs list.

### tabs.remove(fileName)

Remove tab from tabs list by name of file.

### tabs.get([fileName])

Get specific tab or all tabs in case of no argument. FileName should be string.

## How to use?

```js
var tabify  = require('tabify'),
    tabs    = tabify(),
    name    = 'README.md';
    
tabs.add({
    name: name,
    path: '/' + name,
    data: 'hello world',
    row: '1',
    column: '5'
});

tabs.get();
// returns 
[{
    column: "5"
    data: "hello world"
    name: "README.md"
    path: "/README.md"
    row: "1"
}]

tab.remove(name);

tabs.get();
//returns
[];

```

## License

MIT
