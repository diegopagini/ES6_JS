/** @format */

let greeting = 'Hola Mundo!';
// starsWith
console.log(greeting.substring(0, 1) === 'H'); // ES5
console.log(greeting.startsWith('H')); // ES6
console.log(greeting.startsWith('Mu', 5)); // true
// endsWith
console.log(greeting.endsWith('Mundo!')); // ES6
console.log(greeting.endsWith('a', 4)); // true
// includes
console.log(greeting.indexOf('x')); // -1. ES5
console.log(greeting.includes('x')); // false. ES6
console.log(greeting.includes('a')); // true. ES6
console.log(greeting.includes('a', 5)); // false. ES6

let text = 'Hola';
// console.log(text.repeat(2)); // 'HolaHola'
// console.log('0'.repeat(10)); // 0000000000

const SPACES = 12;
let names = ['Diego', 'Juan', 'Pedro'];
let phones = ['11111', '222222', '33333'];

for (i in names) {
	let dif = SPACES - names[i].length;
	console.log(names[i] + ' '.repeat(dif) + '|' + ' ' + phones[i]);
}
// Diego       | 11111
// Juan        | 222222
// Pedro       | 33333

const NAME = 'Diego';
const PHONE = 123456;

console.log('Su nombre es: ' + NAME + ', y su teléfono es: ' + PHONE); // Su nombre es: Diego, y su teléfono es: 123456
// ES6
console.log(`Su nombre es: ${NAME}, y su teléfono es: ${PHONE}`); // Su nombre es: Diego, y su teléfono es: 123456

const name = 'Diego';
const lastName = 'Pagini';
const fullName = `${name} ${lastName}`; // Diego Pagini

function getFullName() {
	return 'Diego Pagini';
}

const fullName2 = `El nombre completo es: ${getFullName()}`; // Diego Pagini

let multiLine = `<h1>Título</h1>
<h2>Subtítulo</h2>
<p>Texto</p>
`;

console.log(multiLine);
/**
<h1>Título</h1>
<h2>Subtítulo</h2>
<p>Texto</p>
*/

/**
 * Toda función tiene argumentos aunque a esta no se le pasen.
 */
function tag(literals, ...substitutions) {
	console.log(arguments); /** 0: [ 0: "", 1: " lapices cuestan ", 2: "€" ], 1: 5, 2: 50 */
	let result = '';
	console.log(literals); /** 0: [ 0: "", 1: " lapices cuestan ", 2: "€"] */
	console.log(substitutions); /** [5, 50] */

	for (let i = 0; i < substitutions.length; i++) {
		result += literals[i];
		result += substitutions[i];
	}

	console.log(result); // 5 lapices cuestan 50
	return 'Otro texto';
}

let units = 5,
	unit_cost = 10;

let msg = tag`${units} lapices cuestan ${units * unit_cost}€`;
console.log(msg); // Otro texto
