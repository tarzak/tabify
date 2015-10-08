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
                throw Error('Tab with name' + tab.name + ' already exists!');
            }
            
            tabsList.push(tab);
        };

        this.remove  = function (fileName) {
            tabsList = tabsList.filter(function (tab) {
                return tab.name !== fileName;
            });
        };

        this.get     = function (fileName) {
            if (!fileName) {
                return tabsList.slice();
            } else if (typeof fileName !== 'string') {
                throw Error('fileName should be string!')
            }
            
            return tabsList.filter(function (tab) {
                tab.name === fileName;
            });
    };

})(this);
