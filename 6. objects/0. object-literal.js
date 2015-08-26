(function () {
    'use strict';
    var foo = {
        bar: 10,
        baz: 'hello',
        qux : function(){
            console.log('fnarr fnarr');
        }
    };

    console.log(foo);
    foo.qux();

})();