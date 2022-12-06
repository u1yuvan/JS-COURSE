//Conditional statements
// let isRaining = false;
// let isCloudy = true;

// if (isRaining  || isCloudy) {
//     console.log("Don't forgot to take umbrella!");

// }
// else {
//     console.log("Sky is normal! Enjoy your day");
// }

// if hour is between to 12am to 1pm -> Good Morning
//Else if hour is between 1pm to 6pm -> Good Afternoon
//Else hour is between 6pm to 12am -> good night

// let hrs = new Date();
// let hour = hrs.getHours();                                   OR

let hour= new Date().getHours();
// console.log(hour);
// console.log(hour.getHours());

if (hour >= 0 && hour <= 13)
   {
    console.log("Good Morning");
   }
   else if( hour >= 13 && hour <= 18){
    console.log("Good Afternoon");
   }
    
    else
    {
        console.log("Good Evening");
    }