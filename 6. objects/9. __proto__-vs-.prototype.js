(function () {
    'use strict';
    var Foo = function(){}; //Empty ctor function...

    var bar = new Foo();
    console.log(bar.__proto__ === Foo.prototype);
    console.log(bar.prototype); //Undefined,
})();