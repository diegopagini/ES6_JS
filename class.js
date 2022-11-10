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

/**
 * Métodos estaticos son métodos que podemos utilizar de la clase sin instanciarla.
 */

let methodName = 'shoutName';

class Person {
	constructor(name) {
		this.name = name;
	}

	sayName() {
		console.log(this.name);
	}

	static create(name) {
		return new Person(name);
	}

	// propiedades computadas
	[methodName]() {
		console.log(this.name.toUpperCase());
	}
}

let me = Person.create('Diego');
console.log(me); // Person {name: 'Diego'}
me.sayName(); // Diego
me.shoutName(); // DIEGO

// Herencia
class Rectangulo {
	constructor(alto, largo) {
		this.alto = alto;
		this.largo = largo;
	}

	getArea() {
		return this.alto * this.largo;
	}

	getArea2() {
		return this.alto * this.largo;
	}
}

let rectangulo = new Rectangulo(3, 2);
console.log(rectangulo.getArea()); // 6

class Cuadrado extends Rectangulo {
	constructor(alto) {
		super(alto, alto);
	}

	// Sobreescribir los métodos del padre
	getArea2() {
		return 'Cuadrado: ' + this.alto * this.alto;
	}
}

let cuadrado = new Cuadrado(4);
console.log(cuadrado.getArea()); // 16
console.log(cuadrado instanceof Cuadrado); // true
console.log(cuadrado instanceof Rectangulo); // true
console.log(cuadrado.getArea2()); // Cuadrado: 16
