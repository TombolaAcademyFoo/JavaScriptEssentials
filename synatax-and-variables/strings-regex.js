var foo = 'Lorem ipsum dolor sit amet';
// You are going to need to investigate Regex for your self - it is a big side-topic. We'll cover what we need.
// See https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions
var regex  = /o/gi; //this /[regex]/ syntax is JavaScript's short-form syntax for creating regex - this case it matches 'o'
                    //the swicthes after the last "/" tell the regex how to match
                    //    g=global (all matches, not the first)
                    //    i=case insensitive
                    //    m= multiline matchingm not used in the example
var regex2 = new RegExp('o'); //this is the long-form syntax - same regex as above.

console.log('Matches found for "o": ', foo.match(regex));
console.log('Matches found for "l" - case insensitive: ',  foo.match(/l/gi)); // can create the regex inline
console.log('Matches found for "l" - case sensitive: ',  foo.match(/l/g)); // can create the regex inline
console.log('Matches found for "l" - case insensitive non global: , stops at first',  foo.match(/l/i)); // can create the regex inline

//Not
console.log('Search for "l" (gets index of first instance) - case insensitive: ',  foo.search(/l/gi)); // Here "/g" is redundant - search returns first index....

// Can create complex patterns e.g.
var moreComplextRegex = /[aeiou]{1}[bcdfghjklmnpqrstvwxyz]{1}/gi; //Matches all vowels followed by a consonant (case insensitive)
console.log(foo.match(moreComplextRegex));

