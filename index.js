//Falsy (false)
// undefined
// null
// 0
// false
// '' -> ""
// NaN

// truthy -> Anything that is not falsy is -> Truthy


let usercolor = undefined;
let defaultcolor = "blue";

let currentColor = usercolor || defaultcolor

console.log("selected Color: " + currentColor);