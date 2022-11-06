/**
 *  @format
 *
 * Los simbolos no tienen constructor.
 */

let primerNombre = Symbol();
let segundoNombre = Symbol();
let apellido = Symbol('apellido');

let persona = {
	[segundoNombre]: 'Hernan',
	[apellido]: 'Pagini',
};
persona[primerNombre] = 'Diego';
console.log(persona.primerNombre); // undefined
console.log(persona[primerNombre]); // Diego. Para acceder a los simbolos hay que utilizar las []. Como propiedades computadas.
console.log(persona[segundoNombre]); // Hernan.
console.log(apellido); // Symbol(apellido);
console.log(persona[apellido]); // Pagini

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

console.log(simbolo1 == simbolo2); // false
console.log(simbolo1 === simbolo2); // false
console.log(Object.is(simbolo1, simbolo2)); // false

console.log(typeof primerNombre); // Symbol

console.log(`Mi simbolo: ${primerNombre}`); // Cannot convert a Symbol value to a string. No se puede convertir el valor de los simbolos.

console.log(primerNombre in persona); // true

// Symbol('id') !== Symbol.for('id')

let userID = Symbol.for('userID');
let object = {};
object[userID] = '123456';
console.log(object[userID]); // 123456

let userID2 = Symbol.for('userID');

console.log(userID == userID2); // true
console.log(userID === userID2); // true
console.log(Object.is(userID, userID2)); // true

let id = Symbol.for('id unico');
console.log(Symbol.keyFor(id)); // id unico

let id2 = Symbol.for('id');
let numero = 10;
let texto = '10';
let bool = true;

console.log(numero + texto); // 1010
console.log(bool + bool); // 2
console.log(`Mi simbolo es: ${String(id2)}`); // Mi simbolo es: Symbol(id)
console.log(texto + id2); // Cannot convert a Symbol value to a string.

let key = Symbol.for('key');

let people = {
	['code']: 'XY123',
	name: 'Diego',
	lastName: 'Pagini',
	age: 30,
	[key]: 'test',
};

for (key in people) {
	console.log(key, people[key]);
}
// code XY123
// name Diego
// lastName Pagini
// age 30
// key no aparece. Porque es un symbol.

let symbols = Object.getOwnPropertySymbols(people);
console.log(symbols); // [Symbol(key)]
for (symbol in symbols) {
	console.log(symbols, Symbol.keyFor(symbols[symbol]));
} // [Symbol(key)] 'key'
