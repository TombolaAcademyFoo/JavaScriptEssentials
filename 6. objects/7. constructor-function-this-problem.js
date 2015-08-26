(function () {
    'use strict';
    //Contrived example for simplest form - accessing a public value from a private function
    var Foo = function(){
        this.bar = 42;

        //inside baz the meaning of this has changed - undefined in node so get an error.
        var baz = function(){
            console.log('bar =' +  this.bar);
        };

        this.executeBaz = function (){
            baz();
        };
    };

    var qux = new Foo();
    qux.executeBaz();
})();