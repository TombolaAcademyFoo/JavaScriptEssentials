(function () {
    'use strict';
    var Animal = function(name){
        this.name = name;

        this.getName = function(){
          return name;
        };

        this.speak = function(){
            return this.saying || '';
        }
    };


    var Dog =  function (name){
        this.saying = 'woof';
        this.growl = function (){
            return 'GRRRRRRRR';
        }
    };
    Dog.prototype = new Animal();

    var doris = new Dog('Doris the Dog');
    console.log(doris.getName());
    console.log(doris.speak());
    console.log(doris.growl());

})();