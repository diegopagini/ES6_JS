/** @format */

// Async
const getName = async () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Diego');
		}, 1500);
	});
};

getName().then(console.log); // Diego

const hello = async () => {
	const name = await getName();
	return `Hola ${name}`;
};

hello().then(console.log); // Hola Diego

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

const getEmployee = async (id) => {
	const dbEmployee = employees.find((employee) => employee.id === id);

	if (!dbEmployee) throw new Error(`No existe un empleado con el id: ${id}`);
	else return dbEmployee;
};

const getSalary = async (employee) => {
	const dbSalary = wages.find((salary) => salary.id === employee.id);

	if (!dbSalary) throw new Error(`No existe un salario para el empleado: ${employee.name}`);
	else
		return {
			name: employee.name,
			salary: dbSalary.salary,
			id: employee.id,
		};
};

const getInfo = async (id) => {
	const employee = await getEmployee(id);
	const salary = await getSalary(employee);

	return `${employee.name} tiene un salario de ${salary.salary}`;
};

getInfo(1).then(console.log); // Diego tiene un salario de 1000
