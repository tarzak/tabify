(function() {
    'use strict';
    
    let Tabify = require('..'),
        test   = require('tape');

    test('add: new tab', t => {
        let tabify  = Tabify,
            tab     = {name: 'testTab'},
            fn      = function () {
                tabify.add(tab);
                
                return tabify.get();
            };

        t.deepEqual(fn(), [tab]);
        t.end();
    });

    test('get: no argument', t => {
        let tabify = Tabify;

        t.ok(Array.isArray(tabify.get()), 'get with no argument should return array of tabs');
        t.end();
    });

    test('get: typeof argument not string', t => {
        let tabify = Tabify,
            fn = function () {
                tabify.get(1);
            };

        t.throws(fn, /fileName should be string/, 'should throw when not string');
        t.end();
    });
})();
