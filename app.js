/** @format */

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
