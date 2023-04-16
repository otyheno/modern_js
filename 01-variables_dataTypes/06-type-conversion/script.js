/*
String to number
*/

let salary = '4300';
console.log(salary, typeof salary);

//Using parseInt or parseFloat
salary = parseInt(salary);
console.log(salary, typeof salary);

//usin unary operator
salary = +salary;
console.log(salary, typeof salary);

//using number method/constructor
salary = Number(salary);
console.log(salary, typeof salary);


/*
Number to String
*/

let salary2 = 5400;
console.log(salary2, typeof salary2);

//Using toString
salary2 = salary2.toString();
console.log(salary2, typeof salary2);

//Using String constructor
salary2 = String(salary2);
console.log(salary2, typeof salary2);