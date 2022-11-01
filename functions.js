/** @format */

// ES5
function greeting(msg, time) {
	msg = msg || 'Hola Mundo'; // Forma 1
	msg = typeof msg !== 'undefined' ? msg : 'Hola Mundo2'; // Forma 2

	setTimeout(function () {
		console.log(`${msg}, time: ${time}`);
	}, time);
}
greeting('Hola Mundo', 500);

// ES6
function greeting2(msg = 'Hola Mundo', time = 1500) {
	setTimeout(() => {
		console.log(`${msg}, time: ${time}`);
	}, time);
}
greeting2();

function greeting3(fn = fnTemporal, people = { name: 'Diego' }) {
	if (typeof fn === 'undefined') {
		return console.log('No es una función');
	}

	fn();
	console.log(people);
}

function fnTemporal() {
	console.log('Hona Mundo FN');
}

greeting3(fnTemporal, { name: 'Test' });
