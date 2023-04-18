const firstName = ["giulio", "marco", "francesco", "pippo","renato"];
const lastName = ["fdds", "svzxcv", "dfds", "dsafwedxv","rossi"];

let list = [];

for (let i = 0; i < 15; i++) {
	let randomLastName = Math.floor(Math.random() * (lastName.length - 1)) + 1;
	let randomName = Math.floor(Math.random() * (firstName.length - 1)) + 1;
	const generator = firstName[randomName] + " " + lastName[randomLastName];
	list.push(generator);
}

console.log(list);