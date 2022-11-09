/** @format */

// Maps - methods.

let map = new Map();

map.set('name', 'Diego');
map.set('age', 30);

console.log(map); // Map {"name" => "Diego", "age" => 30}
console.log(map.size); // 2
console.log(map.get('name')); // Diego
console.log(map.get('age')); // 30
console.log(map.has('name')); // true

map.delete('name');
console.log(map.has('name')); // false

map.set('age');
console.log(map.get('age')); // undefined

map.clear();
console.log(map); // {}

// Inicialización.

let mapa = new Map([
	['name', 'Diego'],
	['age', 30],
	[null, undefined],
]);

console.log(mapa); // Map(3)
console.log(mapa.get(null)); // undefined

// forEach

let map2 = new Map([
	['name', 'Diego'],
	['age', 30],
]);

map2.forEach((value, key, originalMap) => {
	console.log(value); // Diego, // 30
	console.log(key); // name, age
	console.log(originalMap); // Map(2) {"name" => "Diego", "age" => 30}
});
