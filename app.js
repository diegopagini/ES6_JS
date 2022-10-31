/** @format */

function tag(literals, ...substitutions) {
	console.log(arguments);
	/**
	 * 0: [
	 * 0: ""
	 * 1: " lapices cuestan "
	 * 2: "€"
	 * ],
	 * 1: 5,
	 * 2: 50
	 */

	console.log(literals); /** 0: [ 0: "", 1: " lapices cuestan ", 2: "€"] */

	console.log(substitutions); /** [5, 50] */
	return 'Otro texto';
}

let units = 5,
	unit_cost = 10;

let msg = tag`${units} lapices cuestan ${units * unit_cost}€`;
console.log(msg); // Otro texto
