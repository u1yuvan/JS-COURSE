//Testing Elements in JavaScript Array - Reference types
const items = [
    {id:1, name:"Smartphones", isDeliverable:true},

    {id:2, name:"Accessories", isDeliverable:false,
},
    {id:3, name:"T.V", isDeliverable:true},
];


let AllDeliverables = items.every(function(value){
 return value.isDeliverable == true;
});


let notDeliverables = items.some(function(value){
    return value.isDeliverable == true;
   });

console.log("AllDeliverables", AllDeliverables);
console.log("notDeliverables", notDeliverables);