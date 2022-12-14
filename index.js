//Function Arguments
// function sumExpense(){
//     let total =0;

//     for (let value of arguments){
// total += value;
//     }
//     return total;
//   }

// let result = sumExpense( 65,250,105,78,15,69,78 );

// console.log("Your Total Expense is: ₹",result);


function Expense(){
    let total = 0;
    for(let value of arguments){
        total += value;
    }
    return total;
}
let result = Expense(43,35,756,75,2,444645);
console.log("Your Total Expense is: ", result);