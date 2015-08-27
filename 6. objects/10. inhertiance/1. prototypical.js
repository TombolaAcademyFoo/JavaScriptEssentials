(function () {
    'use strict';

    //Create a 'base' animal- note object, not ctor function
    var myAnimal = {
        name:'',
        getName: function(){
          return this.name;
        },
        speak: function(){
            return this.saying || '';
        }
    };

    var myDog = Object.create(myAnimal); //create a new object using myAnimal as the prototype
    myDog.name = 'Doris the dog';
    myDog.saying = 'woof';
    myDog.growl = function(){
        return 'GRRRRRRR';
    };

    console.log(myDog.getName());
    console.log(myDog.speak());
    console.log(myDog.growl());

})();