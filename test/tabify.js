(function() {
    'use strict';
    
    let Tabify = require('../lib/tabify.js'),
        test   = require('tape');

    test('add: new tab', t => {
        let tabify = Tabify,
            fn     = function () {
                tabify.add({name: 'testTab'});
                
                return tabify.get();
            };

        t.deepEqual(fn(), [{name: 'testTab'}]);
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
