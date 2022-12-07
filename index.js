let i = 0; // inline variable

while(i <=20){

if(i % 2 !== 0){
    console.log("Even Number While #" +i);
  } 
  i++; //condition
  console.log(i);
}

do{
    console.log(i);
    if(i % 2 !== 0){
        console.log("Even Number Do While #" +i);
      } 
      i++; //condition

} while(i <=20) 