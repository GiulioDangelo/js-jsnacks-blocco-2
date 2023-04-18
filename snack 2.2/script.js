const firstName = ["giulio", "marco", "francesco", "pippo"];

const lastName = ["fdds", "svzxcv", "dfds", "dsafwedxv"];

let lastNameGenerator = Math.floor(Math.random() * (lastName.length - 1)) + 1;
let nameGenerator = Math.floor(Math.random() * (firstName.length - 1)) + 1;

const list = firstName[nameGenerator] + ' ' + lastName[lastNameGenerator];
console.log(list)


for (let i = 0; i <= 10; i++) {
    console.log(list)
}
