/**
 * @format
 *
 * Arrow functions. No this, super, arguments. No pueden ser llamadas con "new". No tienen prototype.
 * This no puede cambiar con bind, call ni apply.
 */

// ES5
var myFunction2 = function (value) {
	return value;
};

var sum2 = function (num1, num2) {
	return num1 + num2;
};

var greeting2 = function () {
	return 'Hola Mundo';
};

var sayHello2 = function (name) {
	var response = 'Hola, ' + name;
	return response;
};

var getBook2 = function (id) {
	return {
		id: id,
		name: 'Harry Potter',
	};
};

// ES6
const myFunction = (value) => value;

const sum = (num1, num2) => num1 + num2;

const greeting = () => 'Hola Mundo';

const sayHello = (name) => {
	const response = `Hola, ${name}`;
	return response;
};

const getBook = (id) => ({ id, name: 'Harry Potter' });

// Funciones anónimas.
var saludo1 = (function (name) {
	return `Hola ${name}`;
})('Diego');
console.log(saludo1);

// ES6
const saludo = ((name) => `Hola ${name}`)('Diego');
console.log(saludo);

// ES5
var manejador = {
	id: '123',
	init: function () {
		document.addEventListener(
			'click',
			function (event) {
				this.clickInPage(event.type);
			}.bind(this), // La solución en ES5 para "bindear" this.
			false
		);
	},
	clickInPage: function (type) {
		console.log(`Manejando ${type} para el id: ${this.id}`);
	},
};

// manejador.init(); // Uncaught TypeError: this.clickInPage is not a function
manejador.init(); // Manejando click para el id: 123

// ES6
const controller = {
	id: '123',
	init: function () {
		document.addEventListener('click', (event) => {
			this.clickInPage(event.type);
		});
	},
	clickInPage: function (type) {
		console.log(`Manejando ${type} para el id: ${this.id}`);
	},
};

controller.init(); // Manejando click para el id: 123

// ES5
var array = [5, 10, 11, 2, 1, 9, 20];
var sorted = array.sort(function (a, b) {
	return a - b;
});
console.log(sorted); // [1, 2, 5, 9, 10, 11, 20]

// ES6
const myArray = [5, 10, 11, 2, 1, 9, 20];
const mySortedArray = myArray.sort((a, b) => a - b);
console.log(mySortedArray); // [1, 2, 5, 9, 10, 11, 20]

const restart = (a, b) => a - b;
console.log(typeof restart); // function
console.log(restart instanceof Function); // true

let restar2 = new restart(1, 2); // Uncaught TypeError: restart is not a constructor. Arrow functions no tienen constructor.

((a, b) => {
	console.log(arguments);
})(); // Uncaught ReferenceError: arguments is not defined

function example(x, y) {
	((a, b) => {
		console.log(arguments); // [10, 20]
	})();
}
example(10, 20);
