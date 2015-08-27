(function () {
    'use strict';
    //This just happens to be a ctor function...
    var Animal = function(name) {
        this.getName = function(){
            return name;
        };

        this.speak = function(){
          return '';
        };
    };

    //This is the important part!!!
    var dog = function(that){

        that.speak = function(){
          return 'woof';
        },

        that.growl= function(){
            return 'GRRRRR';
        }

        return that;
    };

    var myDog = dog(new Animal('Doris the Dog'));
    console.log(myDog.getName());
    console.log(myDog.speak());
    console.log(myDog.growl());
})();