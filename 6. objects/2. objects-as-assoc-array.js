(function () {
    'use strict';
    // only use this JSON 'stringName' syntax where needed
    // Typically where you have to interop with a system
    // which mandates a name that would otherwise be invalid in JS
    var foo = {
        bar: 'bar',
        '': 'baa',
        'something.daft': 'baa'
    }

    //bar is the only value which has a syntactically valid name,
    //can access either way:
    console.log(foo.bar);
    console.log(foo['bar']);


    //The others would lead to invalid syntax:
    //console.log(foo.); //Nothing after the '.'
    //console.log(foo.something.daft); //looks for a value 'daft' on a value 'something'
    console.log(foo['']); //Nothing after the '.'
    console.log(foo['something.daft']); //looks for a value 'daft' on a value 'something'


    //Iterating the object as an array
    for(var name in foo){
        console.log('The name ' + name + ' has value ' + foo[name]);
    }



    //To delete a property from the associative array
    delete foo.bar;
    delete foo[''];
    //those properties are now gone.


    // The outcome of the following depends on whether in strict mode:
    // var qux = 314;
    // delete qux;
    // Strict mode will not compile - without strict mode the value will still be defined.

})();