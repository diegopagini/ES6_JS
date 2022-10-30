/** @format */

let greeting = 'Hola Mundo!';
// starsWith
console.log(greeting.substring(0, 1) === 'H'); // ES5
console.log(greeting.startsWith('H')); // ES6
console.log(greeting.startsWith('Mu', 5)); // true
// endsWith
console.log(greeting.endsWith('Mundo!')); // ES6
console.log(greeting.endsWith('a', 4)); // true
// includes
console.log(greeting.indexOf('x')); // -1. ES5
console.log(greeting.includes('x')); // false. ES6
console.log(greeting.includes('a')); // true. ES6
console.log(greeting.includes('a', 5)); // false. ES6
