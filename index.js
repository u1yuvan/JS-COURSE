//Dynamic Object
const person = {
    name: "yuvan"
}


person.age = 20;
person.greeting = function(){}

delete person.greeting;
delete person.age;

console.log(person);