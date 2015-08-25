var foo = 42,
    bar,
    baz;

//Version a
if (foo >  12){
    bar = 'greater than';
}
else {
    bar = 'less than or equal to';
}

//Version b - functionally equivalent to b
baz = foo >  12 ? 'greater than' : 'less than or equal to';

//null/empty/no value check
var qux;
qux = qux ? qux : 'no longer empty';