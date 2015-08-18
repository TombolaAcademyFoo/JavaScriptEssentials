var foo = 42;
var bar = 42.0;
var baz = 0x2A;
var qux = 'waldorf' * 2;

//=== means same type and value
console.log(foo===bar);
console.log(foo===baz);


var x =  0.1 * 0.2;
console.log("0.1 * 0.2 = ", x);
console.log("float fail!");


console.log('"waldorf" // 2 =', qux);
console.log('is NaN === NaN' + qux === qux);