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

    test('add: existing tab', t => {
        let tabify = Tabify,
            tab    = {name: 'testTab'},
            fn     = function () {
                tabify.add(tab);

                tabify.add(tab);
            };

        t.throws(fn, 'Tab with name ' + tab.name + ' already exists', 'should throw when such tab already exist');
        t.end()
    })

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