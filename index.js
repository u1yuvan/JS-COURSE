let products = [
    {id: 1, title:"Android Mobiles",cost:7500},
    {id: 2, title:"Gaming Computer",cost:90500},
    {id: 3, title:"Headphones",cost:2500},
];

                                          // Sympified  the codes from line 20 to 45  in  line 8 to 17 
let final = products.sort((a,b) =>{ 
    // return a.cost - b.cost;          //ascending
 b.cost - a.cost})                      //descending
 .sort((a,b) => {
    if (a.title < b.title ) return -1;
    if (a.title > b.title ) return +1;
    return 1;})
.filter((val) => {val.cost <= 8000;})
.map((val) => {val.title + " - ₹" + val.cost;});
console.log(final);

                                   
// //Sort it using Lowest price
// let sort_by_Lowest_price = products.sort(function(a,b){
//     // return a.cost - b.cost;          //ascending
//     return b.cost - a.cost;          //descending

// });

// //Sort it by title ascending 
// let sort_by_title = sort_by_Lowest_price.sort(function(a,b){
//     if (a.title < b.title ) return -1;
//     if (a.title > b.title ) return +1;
//     return 1;
// });

// //Filter products less than 8000
// let sort_by_filter = sort_by_title.filter((val) => {
//     return val.cost <= 8000;
// });

// //Map it like This: //Android Phone - 7500
// let final = sort_by_filter.map((val) => {
//     return val.title + " - " + val.cost;}
// );


// console.log(final);