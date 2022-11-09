/** @format */

let numbers = [100, 20, 30, 50, 200];

// FOR IN
for (const i in numbers) {
	console.log(numbers[i]);
} // 100 20 30 50 200

// FOR OF
for (const number of numbers) {
	console.log(number);
} // 100 20 30 50 200

let people = [
	{
		name: 'Diego',
		age: 30,
	},
	{
		name: 'Juan',
		age: 40,
	},
	{
		name: 'Pedro',
		age: 25,
	},
];

for (const obj of people) {
	console.log(obj.name);
} // Diego Juan Pedro

let people2 = new Set([
	{
		name: 'Diego',
		age: 30,
	},
	{
		name: 'Juan',
		age: 40,
	},
	{
		name: 'Pedro',
		age: 25,
	},
]);

for (const iterator of people2) {
	console.log(iterator.age);
} // 30 40 25

let mapa = new Map([
	['name', 'Diego'],
	['name', 'Juan'],
]);

for (const map of mapa) {
	console.log(map);
} // ["name", "Juan"]
