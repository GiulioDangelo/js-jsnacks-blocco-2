const firstName = ["giulio", "marco", "francesco", "pippo"];
const lastName = ["fdds", "svzxcv", "dfds", "dsafwedxv"];

let randomLastName = Math.floor(Math.random() * (lastName.length - 1)) + 1;
let randomName = Math.floor(Math.random() * (firstName.length - 1)) + 1;

const generator = firstName[randomName] + ' ' + lastName[randomLastName];
let list = []

for (let i = 0; i < 15; i++) {
    list.push(generator) 
}
console.log(list)