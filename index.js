// Mapping a JavScript Array
// const numbers = [1,2,3,4,5,6];

// let final = numbers.map(function(val){
// return val * 5;

// });
// console.log(final);

const people = [
    {id:1, first_name:"yuvan", last_name:"raj"},
    {id:2, first_name:"sri", last_name:"dhar"},
    {id:3, first_name:"anbu", last_name:"arasan"},
];



let final = people.map(function(val){
    let fullname =[val.first_name, val.last_name].join(" ");
    let obj = {id: val.id,fullname: fullname}
    return obj;
    
})

console.log(final);