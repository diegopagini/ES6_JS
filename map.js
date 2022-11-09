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
