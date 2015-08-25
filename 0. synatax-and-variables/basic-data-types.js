var foo = null;

//console.log outputs to the console/command window
//typeof gets the name of variable's type
// '%s is of type %s' allows substitutions in console - do now worry for now!
console.log('%s is of type %s', foo, typeof foo);


//can redefine an existing variable - unlike most of the other languages you are likely to have used:

foo = true;
console.log('%s is of type %s', foo, typeof foo); //Now a boolean

foo = 42;
console.log('%s is of type %s', foo, typeof foo);

foo = 10.33;
console.log('%s is of type %s', foo, typeof foo); //still just a number, all are floats

foo = 0xDEADBEEF; //"Hex" number
console.log('%s is of type %s', foo, typeof foo); //still just a number, all are floats

foo = 'Some text';
console.log('%s is of type %s', foo, typeof foo);

foo = {}; //trust me for now, this is an object
console.log('%s is of type %s', foo, typeof foo); //still just a number, all are floats

console.log('Is 10 the same as 0xA? '+  (10 === 0xA)); //Really, no matter how you declare them numbers are floats.