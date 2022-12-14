//Function Default Parameters

function calculateTax(cost,tax = 18,title){

  TaxAmount = cost * (tax/100);  //45* (18/100)

  console.log(`Total Cost is: ₹${cost} \n\nGST Of Tax(${tax}%) is: ${TaxAmount} \n\nTotal Amount is: ₹${cost + TaxAmount}`);
  }

  calculateTax(3500,30,"Mobile")