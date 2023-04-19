const odds = [];

for (let i = 0; i < 6; i++) {
	const number = parseInt(prompt("inserisci un numero"))
		
	if (number % 2 === 1) {
		odds.push(number);
	}
}

console.log(odds);
