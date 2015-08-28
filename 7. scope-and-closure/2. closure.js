(function () {
    'use strict';
    var nextCount= function(){
            var counter = 0;
            return function(){return counter++; };
        },
        foo = nextCount();
    console.log(foo());
    console.log(foo());
    console.log(foo());
    console.log(foo());
})();