/** @format */

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
