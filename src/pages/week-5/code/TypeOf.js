function logItType(output) {
	console.log(typeof output, ';', output);
}
console.log('Looking at dynamic nature of types in JavaScript');
logItType('hello'); // String
logItType(2020); // Number
logItType([1, 2, 3]); // Object is generic for this Array, which similar to Python List
