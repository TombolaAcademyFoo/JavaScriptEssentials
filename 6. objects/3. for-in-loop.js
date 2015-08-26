(function () {
    'use strict';
    var foo = {
        '2': 42,
        '1': 'Hello',
        '3': 'Sailor',
        'ZZZZ': 'Gooo'
    };

    for(var name in foo){
        console.log(name + '=' + foo[name]);
    }
})();