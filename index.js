let student = {
  firstname: "yuvan",
  lastname:"raj",
  get fullname(){
    return`${student.firstname} ${student.lastname}`;
  },
  set fullname(value){
   let values =  value.split(" ");
   this.firstname = values[0];
   this.lastname = values[1] ?? "";
  },
};
student.fullname ="Arthur"
// getters => used to get data
//setters => used to set data

console.log(student.fullname);