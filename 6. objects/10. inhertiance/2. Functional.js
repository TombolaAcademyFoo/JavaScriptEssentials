(function () {
    'use strict';
    //Note lower case - no need for new keyword
    var animal = function(spec){
        var that = {};

        that.getName = function(){
            return spec.name;
        };

        that.speak = function(){
          return spec.saying || '';
        };

        return that;
    };

    var dog = function(spec){
        var that;
        spec.saying = 'woof';

        //Could use a literal or new'd object.
        that = animal(spec);

        that.growl = function(){
            return 'GRRRRR';
        };

        return that;
    };

    var myDog = dog({name: 'Doris the Dog'});
    console.log(myDog.getName());
    console.log(myDog.speak());
    console.log(myDog.growl());

})();