(function () {
    'use strict';
    var person = {
        getKind: function(){
            return 'my kind is person';
        }
    }

    //person is still just a function:
    console.log(person.getKind());

    var zack = Object.create(person);
    console.log(Object.getPrototypeOf(zack));
    console.log(zack.getKind()); //Method inherited from prototype

    //Altering the prototype alters the derived objects
    person.isGenericPerson = true;
    console.log(person.isGenericPerson);
    console.log(zack.isGenericPerson);

    //Altering the derived object does not update the prototype
    zack.isGenericPerson = false;
    console.log(person.isGenericPerson); //Not updated
    console.log(zack.isGenericPerson);

    //Can continue to add to derived object:
    zack.isZack = true;
    console.log(person.isZack); //Not defined
    console.log(zack.isZack);

    //__proto__ is available in ES6 where implemented, neater:
    var miri = {};
    miri.__proto__ = person;
    console.log(miri.getKind()); //Derived from the person prototype
})();