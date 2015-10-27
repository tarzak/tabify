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
                contains = isContaining(tabsList, 'name', fileName);
            
            checkTypes(tab);
            
            if (contains) {
                throw Error('Tab with name ' + tab.name + ' already exists!');
            }
            
            tabsList.push(tab);
        };

        this.remove  = function(fileName) {
            var contains = isContaining(tabsList, 'name', fileName);

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

        this.contains = function(path) {
            return isContaining(tabsList, 'path', path);
        };

        function isContaining(tabsList, propertyName, propertyValue) {
            return tabsList.some(function(tab) {
                return tab[propertyName] === propertyValue;
            });
        }
        
        function checkTypes(tab) {
            var string          = getTypes('string', ['name', 'path', 'data']),
                number          = getTypes('number', ['row', 'column']),
                properties      = string.concat(number),
                wrongTypeTab    = partial(wrongType, tab);
            
            properties
                .filter(wrongTypeTab)
                .forEach(throwWrong);
        }
        
        function partial(fn, value) {
            return fn.bind(null, value);
        }
        
        function getTypes(type, array) {
            return array.map(function(name) {
                return {
                    name: name,
                    type: type
                };
            });
        }
        
        function wrongType(tab, property) {
            var name    = property.name,
                type    = property.type,
                wrong   = typeof tab[name] !== type;
            
            return wrong;
        }
        
        function throwWrong(property) {
            var name    = property.name,
                type    = property.type;
            
            throw Error('tab.' + name + ' should be ' + type + '!');
        }
    }
})(this);
