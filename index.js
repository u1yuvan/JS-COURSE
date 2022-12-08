//Factory functions
function createPerson(name){//camelcase: myFristName


return  {
    name:name,  
Greeting:function() {
    console.log(m`My name is ${this.name}`);
        }
    };
}

//constructor functions

function Person(name){// Pascal -> MyFristName
    this.name = name;
    this.Greeting = function() {
        console.log(`My name is ${this.name}`);
    }
    }
    let person = new Person("yuvan");

    person.Greeting();

