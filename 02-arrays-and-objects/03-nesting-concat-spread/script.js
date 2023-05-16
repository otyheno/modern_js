//array constructor
const food = ['beef', 'cheese', 'chicken', 'rice', 'beans'];

const fruits = ['mango', 'orange', 'apple', 'strawberry']

//nesting
//food.push(fruits)
//all=[food,fruits]

let x;

//x = food[food.length-1][1];

//concat
x = food.concat(fruits);

//spread(...)
x = [...food, ...fruits]

//flatten array (flat())

//static methods
x = Array.isArray(food);


console.log(x);