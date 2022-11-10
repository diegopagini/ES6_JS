/** @format */

// Callback
const gerUserById = (id, callback) => {
	const user = {
		name: 'Diego',
		id,
	};

	if (id === 'abc') callback(`El usuario con el id: ${id} no existe.`);
	else callback(null, user);
};

gerUserById('abc123', (err, user) => {
	if (err) {
		console.error(err);
		return;
	}

	console.log(`Usuario de base de datos: ${JSON.stringify(user)}`);
}); // Usuario de base de datos: {"name":"Diego","id":"abc123"}

gerUserById('abc', (err, user) => {
	if (err) {
		console.error(err);
		return;
	}

	console.log(`Usuario de base de datos: ${JSON.stringify(user)}`);
}); // El usuario con el id: abc no existe.

const employees = [
	{
		id: 1,
		name: 'Diego',
	},
	{
		id: 2,
		name: 'Pedro',
	},
	{
		id: 3,
		name: 'Juan',
	},
];

const wages = [
	{
		id: 1,
		salary: 1000,
	},
	{
		id: 2,
		salary: 2000,
	},
];

const getEmployee = (id, callback) => {
	const dbEmployee = employees.find((employee) => employee.id === id);
	if (!dbEmployee) callback(`No existe el empleado con el id: ${id}`);
	else callback(null, dbEmployee);
};

getEmployee(1, (err, employee) => {
	if (err) {
		console.error(err);
		return;
	}

	console.log(`Employee: ${JSON.stringify(employee)}`);
}); // Employee: {"id":1,"name":"Diego"}

getEmployee(4, (err, employee) => {
	if (err) {
		console.error(err);
		return;
	}

	console.log(`Employee: ${JSON.stringify(employee)}`);
}); // No existe el empleado con el id: 4

// Callback Hell
const getSalary = (employee, callback) => {
	const dbSalary = wages.find((salary) => salary.id === employee.id);
	if (!dbSalary) callback(`No existe un salario para el empleado: ${employee.name}`);
	else
		callback(null, {
			name: employee.name,
			salary: dbSalary.salary,
			id: employee.id,
		});
};

getEmployee(1, (err, employee) => {
	if (err) {
		console.error(err);
		return;
	}

	getSalary(employee, (err, response) => {
		if (err) return console.log(err);

		console.log(`El salario del ${response.name} es de ${response.salary}`);
	});
}); // El salario del Diego es de 1000

getEmployee(3, (err, employee) => {
	if (err) {
		console.error(err);
		return;
	}

	getSalary(employee, (err, response) => {
		if (err) return console.log(err);

		console.log(`El salario del ${response.name} es de ${response.salary}`);
	});
}); // No existe un salario para el empleado: Juan

getEmployee(4, (err, employee) => {
	if (err) {
		console.error(err);
		return;
	}

	getSalary(employee, (err, response) => {
		if (err) return console.log(err);

		console.log(`El salario del ${response.name} es de ${response.salary}`);
	});
}); // No existe el empleado con el id: 4
