// Regular Expressions - Metacharacter Symbols

let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols - making sure the characters match
re = /^h/i;       // Must start with
re = /World$/i;   // Must end with
re = /^hello$/i;  // Must begin and end with
re = /h.llo/i;    // Matches any ONE character
re = /^h*llo/i;   // Matches any character 0 or more times
re = /gre?a?y/i;  // Optional character
re = /gre?a?y\?/i;  // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i;    // Must be an a or e
re = /[GF]ray/i;    // Must be an G or F
re = /[^GF]ray/i;   // Match anything except a G or F
re = /[A-Z]ray/;    // Match any uppercase letter
re = /[A-Za-z]ray/;    // Match any lowercase letter


// string to match
const str = 'Aray';

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