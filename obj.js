/** @format */

let person1 = {
	name: 'Diego',
	age: 30,
};

let person2 = person1; // Todos los objetos son pasados por referencias. Esta es una asignación de memoria y no de valor.

console.log(person1); // { name: 'Diego',	age: 30 };
console.log(person2); // { name: 'Diego',	age: 30 };

person2.name = 'Juan';

console.log(person1); // { name: 'Juan',	age: 30 };
console.log(person2); // { name: 'Juan',	age: 30 };

// Solución

let person3 = { ...person1 }; // Se extrae cada propiedad y se asigna al objeto. Se rompe la referencia.
person3.name = 'Pedro';
console.log(person1); // { name: 'Juan',	age: 30 };
console.log(person3); // { name: 'Pedro',	age: 30 };

// COpiar objetos

let obj1 = {
	name: 'test',
	age: 20,
};

let obj2 = {
	name: 'Juan',
	age: 18,
	address: 'Siempreviva 123',
	isDriver: true,
	vehicle: true,
	vegetarian: false,
	isMarried: true,
};

obj1 = { ...obj2 };

console.log(obj1); // {"name": "Juan", "age": 18, "address": "Siempreviva 123", "isDriver": true, "vehicle": true,"vegetarian": false, "isMarried": true }
console.log(obj2); // {"name": "Juan", "age": 18, "address": "Siempreviva 123", "isDriver": true, "vehicle": true,"vegetarian": false, "isMarried": true }

// ES5
function createPeople(name, surname, age) {
	return {
		name: name,
		surname: surname,
		age: age,
	};
}

// ES6
const createPeople = (name, surname, age) => ({
	name,
	surname,
	age,
});

// Métodos concisos
// ES5
var persona = {
	name: 'Diego',
	getName: function () {
		console.log(this.name);
	},
};

// ES6
const persona = {
	name: 'Diego',
	getName() {
		console.log(this.name);
	},
};

// Object.is()
console.log(+0 == -0); // true
console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); // false
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
console.log(Object.is(NaN, NaN)); // true
console.log(5 == '5'); // true
console.log(5 == 5); // true
console.log(5 === 5); // false
console.log(Object.is(5, 5)); // true
console.log(Object.is(5, '5')); // false

// Object.assign()

// ES5
function mezclar(objReceptor, objDonador) {
	Object.keys(objDonador).forEach(function (key) {
		objReceptor[key] = objDonador[key];
	});

	return objReceptor;
}

const objReceptor = {};
const objDonador = {
	get name() {
		return 'mi-archivo.js';
	},
};
console.log(mezclar(objReceptor, objDonador)); // {name: 'mi-archivo.js'}

// ES6
console.log(Object.assign(objReceptor, objDonador)); // {name: 'mi-archivo.js'}
