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
