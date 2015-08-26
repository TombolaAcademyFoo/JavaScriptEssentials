(function () {
    'use strict';
    var Animal = function(name){
        var me = this;
        me.name = name;

        me.getName = function(){
          return name;
        };

        me.speak = function(){
            return this.saying || '';
        }
    };

    var amy = new Animal('Amy the Amoeba');
    console.log(amy.getName());
    console.log(amy.speak());

    //Option 1 = psuedoClassical ********************************************
    var Dog =  function (name){
        Animal.call(this, name);
        this.saying = 'woof';
        this.growl = function (){
            return 'GRRRRRRRR';
        }
    };

    Dog.prototype = Object.create(Animal.prototype);
    var doris = new Dog('Doris the Dog');
    console.log(doris.getName());
    console.log(doris.speak());
    console.log(doris.growl());

    //Option 2 = prototypal: mutate a base instance...
    var myAnimal = new Animal(); //Create base instance
    var catherine = Object.create(myAnimal);
    catherine.name = 'Catherine the Cat';
    catherine.saying = 'miaow';
    catherine.purr = function(){
        return 'PRRRRRRR';
    };
    console.log(catherine.getName());
    console.log(catherine.speak());
    console.log(catherine.purr());



})();