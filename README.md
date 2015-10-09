# Tabify [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

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
    row: 1,
    column: 5
});

tabs.get();
// returns 
[{
    name: "README.md",
    path: "/README.md",
    data: "hello world",
    row: 1,
    column: 5
}]

tabs.remove(name);

tabs.get();
//returns
[];

```

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/tabify.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/tarzak/tabify/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/gemnasium/tarzak/tabify.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/tabify "npm"
[BuildStatusURL]:           https://travis-ci.org/tarzak/tabify  "Build Status"
[DependencyStatusURL]:      https://gemnasium.com/tarzak/tabify "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"