(function() {
    'use strict';
    
    var Tabify = require('..'),
        test   = require('tape');

    test('contains path', t => {
        let tabs    = Tabify(),
            name    = 'README.md',
            path    = '/test',
            tab     = {
                name: name,
                path: path,
                data: 'hello world',
                row: 1,
                column: 5
            },
            fn      = function () {
                tabs.add(tab);
                tabs.contains(path);
            };

        t.ok(fn, 'contains already existing path, should return true');
        t.end();
    });

    test('does not contain path', t => {
        let tabs    = Tabify(),
            path    = '/test',
            fn      = function () {
                tabs.contains(path);
            };

        t.notOk(fn(), 'does not contain specific path');
        t.end();
    });
    
    test('add: new tab with values of a wrong type', t => {
        let tabs    = Tabify(),
            tab     = {},
            fn      = function () {
                tabs.add(tab);
            };
        
        tab.name = 1;
        t.throws(fn, /tab.name should be string!/, 'should throw when name not string');
        tab.name = '';
        
        tab.path = 1;
        t.throws(fn, /tab.path should be string!/, 'should throw when path not string');
        tab.path = '';
        
        tab.data = 1;
        t.throws(fn, /tab.data should be string!/, 'should throw when data not string');
        tab.data = '';
        
        tab.row = '';
        t.throws(fn, /tab.row should be number!/, 'should throw when row not number');
        tab.row = 1;
        
        tab.column = '';
        t.throws(fn, /tab.column should be number!/, 'should throw when column not number');
        tab.column = 1;
        
        t.doesNotThrow(fn, 'should not throw when all fields have normal values');
        t.end();
    });

    test('add: new tab', t => {
        let tabs      = Tabify(),
            name      = 'README.md',
            tabObject = {
                name: name,
                path: '/' + name,
                data: 'hello world',
                row: 1,
                column: 5
            },
            fn        = function () {
                tabs.add(tabObject);
                
                return tabs.get();
            };

        t.deepEqual(fn(), [tabObject]);
        t.end();
    });

    test('add: existing tab', t => {
        let tabs      = Tabify(),
            name      = 'README.md',
            tabObject = {
                name: name,
                path: '/' + name,
                data: 'hello world',
                row: 1,
                column: 5
            },
            fn        = function () {
                tabs.add(tabObject);

                tabs.add(tabObject);
            };

        t.throws(fn, 'Tab with name ' + tabObject.name + ' already exists', 'should throw when such tab already exist');
        t.end();
    });

    test('get: no argument', t => {
        let tabs     = Tabify();
            
        t.ok(Array.isArray(tabs.get()), 'get with no argument should return array of tabs');
        t.end();
    });

    test('get: typeof argument not string', t => {
            let tabs = Tabify(),
                fn   = function () {
                tabs.get(1);
            };

        t.throws(fn, /fileName should be string/, 'should throw when not string');
        t.end();
    });

    test('get: with proper file name', t => {
        let tabs      = Tabify(),
            name      = 'README.md',
            tabObject = {
                name: name,
                path: '/' + name,
                data: 'hello world',
                row: 1,
                column: 5
            },
            fn        = function (name) {
                tabs.add(tabObject);
                return tabs.get(name);
            };
        
        t.deepEqual(fn(name), [tabObject]);
        t.end();
    });

    test('remove: wrong tab', t => {
        let tabs = Tabify(),
            name = 'wrongName.txt',
            fn   = function () {
                tabs.remove(name);
            };

        t.throws(fn, 'no tab with ' + name + ' file name!', 'should throw when no proper tab');
        t.end();
    });

    test('remove: existing tab', t => {
        let tabs      = Tabify(),
            name      = 'README.md',
            tabObject = {
                name: name,
                path: '/' + name,
                data: 'hello world',
                row: 1,
                column: 5
            },
            fn        = function () {
                tabs.add(tabObject);
                tabs.remove(name);

                return tabs.get();
            };

        t.deepEqual(fn(), []);
        t.end();
    });
})();
