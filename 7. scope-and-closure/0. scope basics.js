var foo = 'foo'; //foo is in global scope.
var bar = function (){
    var baz ='baz';
    console.log(foo);
    console.log(baz);
    var qux = function (){
        console.log(foo);
        console.log(baz);
    }

    //NOT BLOCK SCOPE - z is available in throughout the function
    if(false){
        var z = 42;
    }
    else {
        z = 69;
    }
    console.log(z);
    qux();

};

console.log(foo);
//console.log(baz); //cannot do - resricted scope

bar();


