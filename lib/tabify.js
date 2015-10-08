(function(global) {
    'use strict';
    
    if (typeof module !== 'undefined' && module.exports)
        module.exports  = TabProto();
    else
        global.tabify   = TabProto();

    function TabProto () {
        if (!(this instanceof TabProto))
            return new TabProto();
        
        var tabsList = [];

        this.add     = function (tab) {
            var isContainTab = tabsList.some(function (d) { 
                return d.name === tab.name;
            });

            if (isContainTab) {
                throw Error('Such tab already exists!');
            }
            else {
                tabsList.push(tab);
            };
        };

        this.remove  = function (fileName) {
            tabsList = tabsList.filter(function (tab) {
                return tab.name !== fileName;
            });
        };

        this.get     = function (fileName) {
            if (fileName) {
                if (typeof fileName === 'string') {
                    return tabsList.filter(function (tab) {
                        tab.name === fileName;
                    });
                }
                else {
                    throw Error('Wrong type of argument!')
                }
            }
            else {
                return tabsList;
            }
        };
    };

})(this);
