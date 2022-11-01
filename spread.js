/** @format */

// SPREAD
let num1 = 10,
	num2 = 30;
let max = Math.max(num1, num2);
console.log(max); // 30

let nums = [1, 5, 2, 3, 1144, 123, 299, 23];
console.log(Math.max(nums)); // NaN

// ES5
console.log(Math.max.apply(Math, nums)); // 1144

// ES6
console.log(Math.max(...nums)); // 1144

const personas = ['Maria', ' Priscila', ' Ester'];
function saludarSpread(saludo, ...nombres) {
	console.log(`${saludo} ${nombres}.`);
}

saludarSpread('Que tal!', personas); // Que tal! Maria, Priscila, Ester.

let partes = ['brazos', 'piernas'];
let cuerpo = ['cabeza', 'cuello', ...partes, 'pies', 'dedos'];
console.log(cuerpo); // ['cabeza', 'cuello', 'brazos', 'piernas', 'pies', 'dedos']
