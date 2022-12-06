// logical operartors

// highincome, CIBILscore -> Loan eligible, Inelegible


let highincome = true
let CIBILscore = false

let eligiblePerson =  highincome ||  CIBILscore

let applicationstatus = !eligiblePerson



console.log( "LoanStatus: " + eligiblePerson);

console.log( "applicationstatus: " + applicationstatus);
