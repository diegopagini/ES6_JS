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
