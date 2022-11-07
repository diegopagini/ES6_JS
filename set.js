/**
 * @format
 *
 * Lista ordenada de valores sin duplicados.
 */

let items = new Set();
console.log(items); // Set(0)

items.add(1);
items.add(2);
items.add(3);
console.log(items); // Set(3) {1, 2, 3}
console.log(items.size); // 3
items.add(3); // Se ignora porque ya existe.
items.add(3); // Se ignora porque ya existe.
items.add(3); // Se ignora porque ya existe.
console.log(items); // Set(3) {1, 2, 3}
console.log(items.size); // 3
items.add('3');
console.log(items); // Set(4) {1, 2, 3, "3"}
console.log(items.size); // 4

let items2 = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5]);
console.log(items2); // Set(4) {1, 2, 3, '3'}
console.log(items2.size); // 4

// has() para saber si existe
console.log(items.has(3)); // true

let items3 = new Set([1, 2, 3, 4, 5]);
console.log(items3.size); // 5

// delete
items3.delete(3); // delete("aqui va el elemento")
console.log(items3); // Set(4) {1, 2, 4, 5}
console.log(items3.size); // 4

// clear
items3.clear();
console.log(items3); // Set(0)
console.log(items3.size); // 0

// forEach
let personas = new Set(['Diego', 'Juan', 'Pedro']);

personas.forEach((valor, llave, setOriginal) => {
	console.log(valor, llave, setOriginal); // Set(3) {'Diego', 'Juan', 'Pedro'}
	console.log(personas === setOriginal); // true
});

// Set to Array
let numeros = [1, 2, 3, 3, 3, 3, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 8, 9, 10];

let setNumeros = new Set(numeros);

console.log(setNumeros);

let arrayNumeros = [...setNumeros];

console.log(arrayNumeros); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// La forma mas fácil para eliminar los duplicados de un array.
function deleteDuplicateOnes(items) {
	return [...new Set(items)];
}
