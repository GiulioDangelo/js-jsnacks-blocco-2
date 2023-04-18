const num = [1,2,3,4,5,6,7,8,9,10,]
let odds = [];

for (let i = 0; i <  num.length; i++) {
    if (num[i] % 2 === 1) {
        odds.push(num[i])
    }
}

const sum = odds.reduce((total, amount) => total + amount)
console.log(sum)