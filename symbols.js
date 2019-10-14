// Regular Expressions - Metacharacter Symbols

let re;
// Literal Characters
re = /hello/;
re = /hello/i;



// string to match
const str = 'Hello World';

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