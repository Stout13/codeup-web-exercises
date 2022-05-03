// Write a function that takes an object (a) as argument
// Return an array with all object keys
var input= {a:1,b:2,c:3}
// expected output: ['a','b','c']


function objectKey(obj) {
   return Object.keys(obj);
}

objectKey(input);

// example input: {a:1,b:2,c:3}
// expected output: ['a','b','c']