const numbers = [12, 45, 33, 29, 39];

// push - add to the end of the array
numbers.push(20);

//pop -remove last element
numbers.pop();

// unshift  - add at the beginning of the array
numbers.unshift(20);

//shift - remove from the beginning of the array
numbers.shift();

//reverse
//numbers.reverse();


//get values from array

let x;

x = numbers.includes(29);

x = numbers.indexOf(45);


console.log(x);