/** @format */

// Object.setPrototypeOf
let gato = {
	sonido() {
		console.log('Miau!');
	},
	chillido() {
		console.log('MIAU!!!');
	},
};

let perro = {
	sonido() {
		console.log('Guau!');
	},
};

let angora = Object.create(gato);
console.log(Object.getPrototypeOf(angora) === gato); // true
angora.sonido(); // Miau!
angora.chillido(); // MIAU!!!

Object.setPrototypeOf(angora, perro);
console.log(Object.getPrototypeOf(angora) === gato); // false
angora.sonido(); // Guau!
angora.chillido(); // angora.chillido is not a function

// super

let persona = {
	saludar() {
		return 'Hola';
	},
};

// ES5
let amigo = {
	saludar() {
		return Object.getPrototypeOf(this).saludar(this) + ', saludos!!!';
	},
};

Object.setPrototypeOf(amigo, persona);
console.log(amigo.saludar()); // Hola, saludos!!!

// ES6
let amigo2 = {
	saludar() {
		return super.saludar() + ', saludos!!!';
	},
};

Object.setPrototypeOf(amigo2, persona);
console.log(amigo2.saludar()); // Hola, saludos!!!
