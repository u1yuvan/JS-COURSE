//JS Error Handling (try, throw and catch)
let student = {
  firstname: "yuvan",
  lastname:"raj",
  get fullname(){
    return`${student.firstname} ${student.lastname}`;
  },


  set fullname(value){
    if(typeof value != "string") {
      const error404 =new Error("It is not a String")
      throw error404;
    }

    if(value.length <= 3) throw new Error("Name Invalid");


   let values =  value.split(" ");
   this.firstname = values[0];
   this.lastname = values[1] ?? "";
  },
};


try{
  //Defensive Programming
  student.fullname ="A";
}catch(ex){
alert(ex);
}


console.log(student.fullname);