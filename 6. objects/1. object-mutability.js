(function () {
    'use strict';
    var foo = {
        bar: 10,
        baz : function(){
            console.log('fnarr fnarr');
        }
    };

    console.log(foo.bar);
    foo.baz();

    foo.bar = function(){
        console.log('bar is now a function');
    }

    foo.baz= 42;

    foo.bar();
    console.log(foo.baz);

})();