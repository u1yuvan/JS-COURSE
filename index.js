//Adding elements to JavaScript Array
//PRIMITIVE TYPES


const accessories =[
  {id:1, item:"headphones", quantity:3},
  {id:2, item:"wrist watch", quantity:2},
  {id:3, item:"bluetooth speaker", quantity:1},
  {id:4, item:"pendrive", quantity:3},
  {id:5, item:"perfume", quantity:4},
  {id:6, item:"hair wax", quantity:1},
  {id:7, item:"trimmer", quantity:1},
  {id:8, item:"laptop", quantity:2},
  {id:9, item:"blow dryier", quantity:1},
]

// let result = accessories.find(function(accessories){
//  return accessories.item ==="laptop"}
//  )


let result = accessories.find( (accessories)=> accessories.item ==="laptop")// Arrow Function

 console.log(result);