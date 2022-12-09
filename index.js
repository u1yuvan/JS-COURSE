//Enumerating Properties of an Object
const user ={
    name:'yuvan',
    age :20,
    getFullName(){
        console.log(`My name is ${this.name}`);
    }
}

//CLONING OBJECTS


// let another = Object.assign({},user);
// age:20;

// SPREAD OPERATOR
let another = {...user}


console.log(another);



// for(let key  in user){
//     another[key] = user[key];
// }
