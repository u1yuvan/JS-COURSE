
// Combining Arrays
const shopping_cart = ['Beans','Masala','Maggi'];
const additional_cart =['Matchbox', 'salt'];

// Combine
// let recipe = shopping_cart.concat(additional_cart);

//Spread Operator
let recipe = [...shopping_cart,73,{name:"yuvan"},...additional_cart];

console.log(recipe);
