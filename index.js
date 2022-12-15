// Var vs Let

function displaynumbers(){
    for ( i = 1; i <= 10; ++i){
if (true){
    message = "Hello Everyone!"
}

    console.log("My Number is #" + i);
    }
    console.log(i);
    console.log(message);
}

// if keyword not defined, it will be taken as "Var"

//    Var
//["Var" keyword is accessible in function-scope.]
//var = function scope   [it will be accessible in this whole function]
// Var is  merged with window, So it maybe  create some merge conflicts.  


//  LET
// "Let" is only accessible only in block-scope 
//let = block scope  [ it will not visible out of the block]
//Let  is a safe, it cannot come out of code block


displaynumbers();
