/** @format */

// ES5 - No existian las clases.

// necesita ser usado con "new".
function Persona(nombre) {
	this.nombre = nombre;
	this.gritarNombre = function () {
		console.log(this.nombre.toUpperCase());
	};
}

Persona.prototype.decirNombre = function () {
	console.log(this.nombre);
};

const diego = new Persona('Diego');
diego.gritarNombre(); // DIEGO
diego.decirNombre(); // Diego

console.log(diego instanceof Persona); // true
console.log(diego instanceof Object); // true

// ES6
class People {
	constructor(name) {
		this.name = name;
	}

	sayName() {
		console.log(this.name);
	}

	shoutName() {
		console.log(this.name.toUpperCase());
	}
}

const diego2 = new People('Diego');
diego2.sayName(); // Diego
diego2.shoutName(); // DIEGO
console.log(diego2 instanceof People); // true
console.log(diego2 instanceof Object); // true
console.log(typeof People); // function... could it be class
