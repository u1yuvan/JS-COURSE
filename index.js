//Factory functions
function createperson(name){


return  {
    name:name,  
Greeting:function() {
    
    let msg = `My name is ${this.name}`;
    console.log(msg);
        }
    };
}

let yuvan = createperson("yuvan");
let sridhar = createperson("sridhar");
yuvan.Greeting();
sridhar.Greeting();