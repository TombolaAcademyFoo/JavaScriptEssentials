
var foo = function (){
    console.log(bar); //bar in scope but undefined
    var bar = 'bar';
    console.log(bar); //now it has been defined
};

//NET Result: declare all variables at the top of the scope!!!
var foo2 = function (){
    var bar;
    console.log(bar); //bar in scope but undefined
    bar = 'bar';
    console.log(bar); //now it has been defined
};


var baz = function (){
    quux();
    var quux = function (){
        console.log('quux');
    };
};

baz();
foo();


