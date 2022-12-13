// Adding Two numbers


//immediately Invoked Function Expression (IIFE)
(() => {
    let no1 = 22356;
let no2 = 67690;

    let result = no1 + no2;
    (function displaynumber(){
        console.log("result: ",result);
    })();
//   displaynumber();
})();

// sumnumbers();