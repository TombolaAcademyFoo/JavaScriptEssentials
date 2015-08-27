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

    var dog = Object.create(myAnimal); //create a new object using myAnimal as the prototype

    dog.saying = 'woof';
    dog.growl = function(){
        return 'GRRRRRRR';
    };

    var myDog = Object.create(dog);
    myDog.name = 'Doris the dog';

    console.log(myDog.getName());
    console.log(myDog.speak());
    console.log(myDog.growl());

})();