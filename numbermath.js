const num1 = 40000;

// Convert number to string and check length
console.log(num1.toString().length);
// Output: 3


// toFixed() adds digits after decimal point
console.log(num1.toFixed(2));
// Output: 400.00


// toPrecision() sets total number of digits
console.log(num1.toPrecision(3));
// Output: 400

console.log(num1.toLocaleString('en-IN'))