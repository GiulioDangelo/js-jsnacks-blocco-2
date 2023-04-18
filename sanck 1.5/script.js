const number = [
	parseInt(prompt("inserisci un numero")),
	parseInt(prompt("inserisci un numero")),
    parseInt(prompt("inserisci un numero")),
	parseInt(prompt("inserisci un numero")),
    parseInt(prompt("inserisci un numero")),
	parseInt(prompt("inserisci un numero")),
];

const odds = [];

for (let i = 0; i < number.length; i++) {
	if (number[i] % 2 === 1) {
		odds.push(number[i]);
	}
}

console.log(odds);
