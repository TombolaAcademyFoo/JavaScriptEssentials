//var foo = ‘This is a ‘string’ with quotes in’; //Won't work - with quotes outside of the string.
console.log('This is a \'string\' with quotes in');
console.log('Using backslash (\\) as an identifier for escape sequences means it must be escaped');

console.log('***This will appear\n**on two lines');
console.log('\t this is tabbed');

console.log('Using \\uddd (where dddd is the four digit hexadecimal unicode value for the character you want) \\u0040 (@ symbol) renders \u0040');
console.log('Note for that to work, the output must support it, eg. \\u0394 is the greek delta - but as this is not available we get: \u0394');