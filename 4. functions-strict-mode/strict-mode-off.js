// The following are not allowed with stict mode on - try the other samples to see the errors.
// More than just these - just a sample of the cruft strict mode prevents.

foo = 42; //use of undeclared variable

eval ('var leftSide = 2'); //Note the embedded JS is string
                    // - the code is executed and leftSide is added to current scope!
                    // #SecurityNighmareLOLZ
console.log(x);

var bar = 99;
delete bar; //Delete allowed under normal mode
console.log(bar);