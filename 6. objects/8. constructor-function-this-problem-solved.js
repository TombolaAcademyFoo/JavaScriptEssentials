(function () {
    'use strict';

    var Foo = function(){
        var me = this,//Crucial line here.
            baz = function(){
                console.log('bar =' +  me.bar);
            };

        me.bar = 42;
        me.executeBaz = function (){
            baz();
        };
    };

    var qux = new Foo();
    qux.executeBaz();
})();