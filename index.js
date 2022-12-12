// Testing is it odd or even

const numbers = [1,2,3,4,5,6];

//every()
// let isEven = numbers.every(function(value){
//     return value % 2 === 0;
// })

// console.log("isEven: ", isEven);


//some()
let isodd = numbers.some(function(value){
    return value % 4 === 1;
})

console.log("isodd: ", isodd);