/** @format */

// console.log(msg); // undefined. No es un error porque la variable ya esta declarada. Pero no tiene valor.
var msg = 'Hola Mundo!'; // scope global.
// console.log(msg); // Hola Mundo!

// console.log(message); // app.js:7 Uncaught ReferenceError: Cannot access 'message' before initialization
let message = 'Hola mundo.';
// console.log(message); // Hola mundo.

if (1 === 3) {
	var data = 'Data';
	let test = 'Test';
}
// console.log(data); // undefined
// console.log(test); // Uncaught ReferenceError: test is not defined at app.js:16:13

let test = 'test';
if (1 === 1) {
	test = 'test2';
}
// console.log(test); // test2

let greeting = 'Hola';
if (2 === 3) {
	let greeting = 'Que tal?'; // function scope.
}
// console.log(greeting); // Hola

let greeting2 = 'Hola';
if (true) {
	let greeting2 = 'Que tal?'; // function scope.
	// console.log(greeting2); // 'Que tal?'
}
// console.log(greeting); // Hola

const SALES_TAX = 15.25; // Deben ser inicializadas siempre.
// console.log(SALES_TAX); // 15.25
// SALES_TAX = 21.0; // Uncaught TypeError: Assignment to constant variable.

if (true) {
	const SALES_TAX = 19.05; // block scope.
	// console.log(SALES_TAX); // 19.05
}

const PEOPLE = {
	name: 'Diego',
	lastName: 'Pagini',
};
// console.log(PEOPLE); // {name: 'Diego', lastName: 'Pagini'}
PEOPLE.name = 'Juan';
// console.log(PEOPLE); // {name: 'Juan', lastName: 'Pagini'}

for (var i = 0; i <= 10; i++) {
	//
}
// console.log(i); // 11

for (let j = 0; j <= 10; j++) {
	//
}
// console.log(j); // Uncaught ReferenceError: j is not defined

var functions = [];

for (var i = 0; i < 10; i++) {
	functions.push(function () {
		console.log(i);
	});
}

functions.forEach(function (func) {
	func(); // 10 10. 10 veces 10.
});

for (let i = 0; i < 10; i++) {
	functions.push(function () {
		console.log(i);
	});
}

functions.forEach(function (func) {
	func();
	// 0
	// 1
	// 2
	// 3
	// 4
	// 5
	// 6
	// 7
	// 8
	// 9
});
