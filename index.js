//JavaScript: Difference Between Sort() ,  find() , filter(), map() and  reduce().... 
const numbers = [45,4,24,54,48,82];

//Sort
// let result  = numbers.sort();
//Find 
// let result=  numbers.find((val) => {
//   return val > 50;
// });

//Filter
// let result=  numbers.filter((val) => {
//     return val > 50;
//   });
//Map
// let result=  numbers.map((val) => {
//     return "#" + val;
//   })

//Reduce
let result=  numbers.reduce((pre,val) => {
    return pre * val;
  })
console.log(result);

