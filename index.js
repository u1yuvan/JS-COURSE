// add two no
let no1 = 35546;
let no2 = 45265;

//function declaration
// function addno(){
//     let result = no1 + no2;
//     console.log(result);
//     }

// addno();
//function expression  (Named function expression)
// const addno = function addno()  {
//     let result = no1 + no2;
//     console.log(result);
//     };

    //Anonymous Function Expression
    // const addno =() => {
    //     let result = no1 + no2;
    //     console.log(result);
    //     };
    

        const addno = new Function("console.log(no1 + no2)");
    addno();