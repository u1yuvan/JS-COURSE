// Allow only adults above 18

// const queue_by_age = [16, 32, 45];

// let adults = queue_by_age.filter(function(value){
//  return value >=18;
// });

// console.log("adults",adults);

// const numbers = [1,2,3,4,5,6];

// let oddnumbers =  numbers.filter(function(value){
//     return value % 2 ==1;
// });

// let evenNumbers = numbers.filter(function(value){
//     return value % 2 ==0;
// });

// console.log("Even Numbers: " ,evenNumbers);
// console.log("Odd Numbers: " ,oddnumbers);

const cart_items = [
    {id:1,item:"Android Mobiles", cost: 5000},
    {id:2,item:"Iphone", cost: 35000},
    {id:3,item:"Android Flagship Mobiles", cost: 50000},
    {id:4,item:"Microsoft Mobiles", cost: 9000},

];



let affordable_filter = cart_items.filter((value) => value.cost < 10000);

let affordable_find = cart_items.find((value) => value.cost > 10000);






console.log("affordable_filter: ", affordable_filter);
console.log("affordable_find: ", affordable_find);
