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

const frutas = ['banana', 'pera', 'uva'];
let [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2); // banana pera
let [, , fruta3] = frutas;
console.log(fruta3); // uva

let otraFruta = 'manzana';
[otraFruta] = frutas;
console.log(otraFruta); // banana

let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;
console.log(a); // 2
console.log(b); // 1

[a, b] = [b, a];
console.log(a); // 1
console.log(b); // 2

let colores1 = ['rojo', ['verde', 'amarillo'], 'morado', 'naranja'];
let [color1, [color2]] = colores1;

console.log(color1); // rojo
console.log(color2); // verde

let colores2 = ['rojo', 'verde', 'amarillo', 'morado', 'naranja'];
let [colorPrincipal, ...demasColores] = colores2;
console.log(colorPrincipal); // rojo
console.log(demasColores); // ['verde', 'amarillo', 'morado', 'naranja']

let fruits = ['banano'];
let [fruit1, fruit2 = 'manzana'] = fruit1;
console.log(fruit1, fruit2); // banano, manzana

const opciones = {
	nombre: 'diego',
};
let { nombre, apellido = 'Pagini' } = opciones;
console.log(nombre, apellido); // diego Pagini

// ES5
function crearJugador(nickname, opciones) {
	opciones = opciones || {};
	let hp = opciones.hp,
		sp = opciones.sp,
		clase = opciones.clase;

	console.log(hp, sp, clase);

	// código para crear jugador
}

crearJugador('LightBringer', { hp: 100, sp: 100, clase: 'Mago' });

// ES6
function createPlayer(nickname, { hp, sp, clase } = { hp: 100, sp: 50, clase: 'Mago' }) {
	console.log(hp, sp, clase);
}
createPlayer('LightBringer', { hp: 100, sp: 100, clase: 'Mago' });
