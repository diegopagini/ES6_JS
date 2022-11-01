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
