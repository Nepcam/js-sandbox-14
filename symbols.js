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
re = /gr[ae]y/i;        // Must be an a or e
re = /[GF]ray/i;        // Must be an G or F
re = /[^GF]ray/i;       // Match anything except a G or F
re = /[A-Z]ray/;        // Match any uppercase letter
re = /[a-z]ray/;        // Match any lowecase letter
re = /[A-Za-z]ray/;     // Match any letter
re = /[0-9][0-9]ray/;   // Match any digit or digits

// Braces {} - Quantifiers
re = /Hel{2}o/i;    // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;    // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;    // Must occur exactly {m} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/

// string to match
const str = '3x3x3x';

// Log Results
const result = re.exec(str);  // here we are calling the re(variable) along with the exec method and passing in the str(variable)
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