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
