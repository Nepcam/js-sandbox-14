let re;
re = /hello/;

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
const result = re.exec('hello world');

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);