/** @format */

// Destructuring

const ajustes = {
	name: 'Diego',
	email: 'diegopaginidev@gmail.com.test',
	facebook: 'Diego.Pagini.123',
	google: 'diego.google',
	premium: true,
};

// ES5
const name2 = ajustes.name;
const email2 = ajustes.email;
console.log(name2, email2); // Diego diegopaginidev@gmail.com.test

// ES6
const { name, email, premium: dePago, twitter = 'test@test' } = ajustes; // premium: dePago es como utilizar el "as"
console.log(name, email, dePago, twitter); // Diego diegopaginidev@gmail.com.test true test@test

let autoGuardado = {
	archivo: 'app.js',
	cursor: {
		linea: 7,
		columna: 16,
	},
	ultimoArchivo: {
		archivo: 'index.html',
		cursor: {
			linea: 8,
			columna: 20,
		},
	},
	otroNodo: {
		subNodo: {
			cursor: {
				linea: 11,
				columna: 2,
			},
		},
	},
};

let { cursor: cursor2 } = autoGuardado;
console.log(cursor2); // { linea: 7, columna: 16 }

// Objetos anidados:
let {
	ultimoArchivo: { cursor: ultimoArchivo },
} = autoGuardado;
console.log(ultimoArchivo); // { linea: 8, columna: 20 }

// Objetos anidados de anidados:
let {
	otroNodo: {
		subNodo: { cursor: otroSuperNodo },
	},
} = autoGuardado;

console.log(otroSuperNodo); // { linea: 11, columna: 2 }
let otroSuperNodo2 = autoGuardado.otroNodo.subNodo.cursor;
console.log(otroSuperNodo2); // { linea: 11, columna: 2 }
