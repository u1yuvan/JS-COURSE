//Rest Operator
function sumExpense(loan,...expenses){

 let total = expenses.reduce((a, b) => a + b);
 return total- loan;
}

let result = sumExpense(100, 65,250,105,78,15,69,78 );

console.log("Your Total Expense is: ₹",result);
