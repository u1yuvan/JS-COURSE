//JavaScript Hoisting

// Function Declaration 

addnoDeclaration();

function addnoDeclaration(){
    console.log("Adding no from func. Declaration: ",);
}


//Function Expression

let addnoExpression = function(){
    console.log("Adding no from func.Expression: ",);

};


addnoExpression();