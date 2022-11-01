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

// sin argumentos opcionales.
function sum(a, b) {
	console.log(arguments);
}
sum(1, 2, 3, { name: 'test' }); // [1, 2, 3, {name: 'Test'}]

// con argumentos opcionales.
function sum2(a = 1, b = 2) {
	console.log(arguments);
}
sum2(); // []

// Parámetro REST

// ES5
function addStudents() {
	console.log(arguments);
	for (let i = 1; i < arguments.length; i++) {
		arguments[0].push(arguments[i]);
	}

	return arguments[0];
}

addStudents();

const studentsArr = ['Diego'];
const sutdentsArr2 = addStudents(studentsArr, 'Maria', 'Pepe', 'Susana', 'Juan');
console.log(sutdentsArr2);

// ES6
function addStudents2(sutdentsArr, ...students) {
	for (let i = 0; i < students.length; i++) {
		sutdentsArr.push(students[i]);
	}

	return sutdentsArr;
}

const studentsArr3 = addStudents2(studentsArr, 'Pedro', 'Pablo', 'Elizabet');
console.log(studentsArr3);
