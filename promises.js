/** @format */

// Promise
function tareAsincrona() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Proceso Asincrono terimnado');

			resolve('Aqui va el .then');
			// reject('Todo mal!');
		}, 1500);
	});
}

tareAsincrona().then(console.log); // Proceso Asincrono terimnado // Aqui va el .then
tareAsincrona().catch(console.error); // Proceso Asincrono terimnado // Todo mal!

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

const getEmployee = (id) => {
	return new Promise((resolve, reject) => {
		const dbEmployee = employees.find((employee) => employee.id === id);
		// Reject
		if (!dbEmployee) reject(`No existe el empleado con el id: ${id}`);
		// Resolve
		else resolve(dbEmployee);
	});
};

const getSalary = (employee) => {
	return new Promise((resolve, reject) => {
		const dbSalary = wages.find((salary) => salary.id === employee.id);
		// Reject
		if (!dbSalary) reject(`No existe un salario para el empleado: ${employee.name}`);
		// Resolve
		else
			resolve({
				name: employee.name,
				salary: dbSalary.salary,
				id: employee.id,
			});
	});
};

getEmployee(1).then(console.log); // { id: 1, name: 'Diego' }
getEmployee(4).catch(console.log); // No existe el empleado con el id: 4

getEmployee(1).then((employee) => {
	getSalary(employee).then(console.log);
}); // { name: 'Diego', salary: 1000, id: 1 }

getEmployee(5)
	.then((employee) => {
		getSalary(employee).then(console.log);
	})
	.catch(console.error); // No existe el empleado con el id: 5
