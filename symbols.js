// Regular Expressions - Metacharacter Symbols

let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;       // Must start with
re = /World$/i;   // Must end with
re = /^hello$/i;  // Must begin and end with
re = /h.llo/i;    // Matches any ONE character
re = /^h*llo/i;   // Matches any character 0 or more times

// string to match
const str = 'Heello';

// Log Results
const result = re.exec(str);
console.log(result);

// custom function to Log a result
function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`)
  }
}

reTest(re, str);