//switch case

// let grade = "B";

// //S
// //A
// //B
// //E
// //U



// switch(grade){
//     case "S":
//         console.log("Super  Grade");
//         break;
//         case "A":
//             case "B":
//             console.log("Exelent Grade");
//             break;

//             case "E":
//                 console.log("Just Pass!");
//                 break;

//             case "U":
//                 console.log("Fail");   
//                 break;
                
//                 default:
//                     console.log("Unknown Grade");

//         }




// let marks = 99;
// switch(true){
//     case marks > 99:
//         console.log("centum");
//         break;
//     case marks > 90:
//         console.log("Super Grade");
//         break;
// case marks > 40:
//     console.log("Pass");
//     break;
    
//         case marks < 40:
//             console.log("Failed!");
//             break;
            
//             default: 
//             console.log("Unknown Grade");
// }

//Example: Mobile buying suggestion
//if given saving amount is > 10k buy Realme mobile
//Else If given amount is > 20k buy iqoo mobile// Else If given amount is 40k buy iphone 11
//Else If given amount is  > 500 && < 1k buy nokia 1100
//Else print "You can't affort mobile phone now!"

let budjet = 300;
switch(true) {
    
    case budjet >=40000:
        console.log("Iphone 11");
        break;
    case budjet >=20000:
        console.log("Iqoo Z6 pro");
        break;
case budjet >=10000:
    console.log("Realme");
    break;
    case budjet >=5000:
        console.log("Redmi");
        break;
    case budjet >=1000:
        console.log("Nokia 1100");
        break
    
    case budjet <=1000 && budjet >= 500:
        console.log("Nokia 1100");
        break;
        
        default:
            console.log("You can't affort mobile phone now!");}