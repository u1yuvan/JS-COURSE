//Sorting a JavaScript Array

// const students = [ 7,5,9,2,4,8];

// students.reverse()    //for reverse this array 

// students.sort();                         //Acending Order

// students.sort(function(a,b){
//     return b- a;                      //Decending Order 
// });


const students = [
    { id:7, name:"senthil" },
    {id:5, name:"Guna"},
    {id:9, name:"Velu"},
    {id:2, name:"thambi"},
    {id:4,name:"Anbu"},
    {id:8, name:"Rajan"}
];

students.sort ( (a,b) => {
    nameA = a.name.toLowerCase();
    nameB = b.name.toLowerCase();

    //a < b => -1
if(nameA < nameB) return -1;

//a > b => +1

if(nameA > nameB) return +1;

//a === b => 0
return 0})



console.log(students);