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
