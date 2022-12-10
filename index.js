//Emptying an JavaScript Array

let number =[1,2,3,4];

//Sollution 1
// number =[];

//Sollution 2
// number.length = 0;

// console.log(number.length);
//Sollution 3
// number.splice(0,number.length)

//Sollution 4
while(number.length) number.pop();

console.log(number);