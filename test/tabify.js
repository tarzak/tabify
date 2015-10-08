(function() {
    'use strict';
    
    let Tabify = require('../lib/tabify.js'),
        test   = require('tape');

    test('get: no argument', t => {
        let tabify = Tabify;

        t.ok(tabify.get().constructor === Array, 'get with no argument should return array');
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