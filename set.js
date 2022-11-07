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
