// Declaring variables
//var, let, const

//declaration
//const cannot be decleared without initialization
let numberOfEmployees;

//initialization
let businessName = "KOTY Enterprise";
let address = "White Angle, Nairobi";
const revenue22 = 6000;

console.log(businessName, address, revenue22);

let yearsOfOperation = 5;
//var yearsOfOperation = 5;
console.log(yearsOfOperation);

/*
Naming conventions
 -only letters, numbers, underscores and dollar sign
 -cant start with an number

multiword formatting
 -businessName = camelCase
 -business_name = underscore
 -BusinessName = PascalCase
 -businessname = lowercase
*/


//Re assigning variables
//const cannot be reassigned
yearsOfOperation = 4;
console.log(yearsOfOperation);


numberOfEmployees = 28;
console.log(numberOfEmployees);


//Declare multilpe values at once
let a,b,c,d;
const e=20, f=30;