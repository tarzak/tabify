(function() {
    'use strict';
    
    let Tabify = require('..'),
        test   = require('tape');

    test('add: new tab', t => {
        let tabs      = Tabify,
            name      = 'README.md',
            tabObject = {
                name: name,
                path: '/' + name,
                data: 'hello world',
                row: '1',
                column: '5'
            },
            fn        = function () {
                tabs.add(tabObject);
                
                return tabs.get();
            };

        t.deepEqual(fn(), [tabObject]);
        t.end();
    });

    test('add: existing tab', t => {
        let tabs      = Tabify,
            name      = 'README.md',
            tabObject = {
                name: name,
                path: '/' + name,
                data: 'hello world',
                row: '1',
                column: '5'
            },
            fn        = function () {
                tabs.add(tabObject);

                tabs.add(tabObject);
            };

        t.throws(fn, 'Tab with name ' + tabObject.name + ' already exists', 'should throw when such tab already exist');
        t.end();
    });    

    test('get: no argument', t => {
        let tabs = Tabify;

        t.ok(Array.isArray(tabs.get()), 'get with no argument should return array of tabs');
        t.end();
    });

    test('get: typeof argument not string', t => {
        let tabs = Tabify,
            fn = function () {
                tabs.get(1);
            };

        t.throws(fn, /fileName should be string/, 'should throw when not string');
        t.end();
    });

    test('get: with proper file name', t => {
        let tabify    = Tabify,
            name      = 'README.md',
            tabObject = {
                name: name,
                path: '/' + name,
                data: 'hello world',
                row: '1',
                column: '5'
            },
            fn        = function (name) {
                return tabify.get(name);
            };
        
        t.deepEqual(fn(name), [tabObject])
        t.end();
    });

    test('remove: wrong tab', t => {
        let tabs = Tabify,
            name = 'wrongName.txt',
            fn   = function () {
                tabs.remove(name);
            };

        t.throws(fn, 'no tab with ' + name + ' file name!', 'should throw when no proper tab');
        t.end();
    });

    test('remove: existing tab', t => {
        let tabs      = Tabify,
            name      = 'README.md',
            tabObject = {
                name: name,
                path: '/' + name,
                data: 'hello world',
                row: '1',
                column: '5'
            },
            fn        = function () {
                tabs.remove(name);

                return tabs.get();
            };

        t.deepEqual(fn(), []);
        t.end();
    });
})();