/** @format */

// ES6
class People {
	constructor(name) {
		this.name = name;
	}

	sayName() {
		console.log(this.name);
	}

	shoutName() {
		console.log(this.name.toUpperCase());
	}
}
