var foo = 'Lorem ipsum dolor sit amet';

console.log('Index of "o"= %s', foo.indexOf('o'));
console.log('Index of "o"= %s', 'Lorem ipsum dolor sit amet'.indexOf('0')); // Can call string methods directly on literall....

console.log('Char at pos 1 = "%s"', foo.charAt(1));

console.log("This string is being concatenated here:".concat('<- with this text ->'))

console.log('Last Index of "o"= %s', foo.lastIndexOf('o'));

console.log('Slicing Between 1 and 15"= "%s"', foo.slice(1,15));

console.log('To Upper case "%s"', foo.toUpperCase());

console.log('To Lower case "%s"', foo.toLowerCase());

console.log('Replace (string version) "%s"', foo.replace('o','$'));

var csvLine = 'foo,bar,baz,quux';
console.log('splitting a string with a delimiter results in an array:',  csvLine.split(','));