(function () {
    'use strict';
    var Foo = function(){
        var bar = 42;
        this.baz = function(){
            console.log('bar is %s', bar);
        };
    };

    var qux = new Foo();
    //console.log(qux.bar); //Wouldn’t work - inaccessible
    qux.baz();
})();