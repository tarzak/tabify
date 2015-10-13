(function(global) {
    'use strict';
    
    if (typeof module !== 'undefined' && module.exports)
        module.exports  = TabProto;
    else
        global.tabify   = TabProto;

    function TabProto() {
        if (!(this instanceof TabProto))
            return new TabProto();
        
        var tabsList = [];

        this.add     = function(tab) {
            var fileName = tab.name,
                contains = isContainingTab(tabsList, fileName),
                properties = ['name','path','data','row','column'];

            properties.forEach(function (property) {
                if (!tab[property])
                    throw Error('some fields are missing or have no values');
            });

            checkTypeOfProperty(tab);

            if (contains) {
                throw Error('Tab with name ' + tab.name + ' already exists!');
            }
            
            tabsList.push(tab);
        };

        this.remove  = function(fileName) {
            var contains = isContainingTab(tabsList, fileName);

            if (!contains) {
                throw Error('no tab with ' + fileName + ' file name!');
            }

            tabsList = tabsList.filter(function (tab) {
                return tab.name !== fileName;
            });
        };

        this.get     = function(fileName) {
            if (!fileName) {
                return tabsList.slice();
            } else if (typeof fileName !== 'string') {
                throw Error('fileName should be string!');
            }
            
            return tabsList.filter(function (tab) {
                return tab.name === fileName;
            });
        };

        function isContainingTab(tabsList, fileName) {
            return tabsList.some(function(d) {
                return d.name === fileName;
            });
        }

        function checkTypeOfProperty(tab) {
            if (typeof tab.name !== 'string' || typeof tab.path !== 'string' || typeof tab.data !== 'string')
                throw Error('some fields contain values of a wrong type');
            if (typeof tab.column !== 'number' || typeof tab.row !== 'number')
                throw Error('some fields contain values of a wrong type');
        }
    }
})(this);
