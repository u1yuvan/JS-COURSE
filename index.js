//JavaScript Arrays - Reduce Method

const shoppingCart =[
    {id:1, item:"Milk", cost:35},
    {id:2, item:"Bread", cost:50},
    {id:3, item:"jam", cost:25},
];

const addcost = (previousval,currentval) => previousval + currentval.cost; 

    let totalCost = shoppingCart.reduce(addcost,0);  //initial value = 0

console.log("Your total amount is: ",totalCost);