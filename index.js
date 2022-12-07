let person = {
    name:"yuvan",
    age:20,
    interest : [' Web Development and learn something new  '],
    isAlive:true,
    address:{
        city:"Coimbatore",
    state:"Tamil nadu"
},


Greeting:function() {
    
    let msg = `My name is ${this.name}, I love ${this.interest}`;
    console.log(msg);
}
};

person.Greeting()