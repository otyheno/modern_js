//using array literal
const numbers = [12, 45, 33, 29, 39];

//array constructor
const food = new Array('beef', 'fish', 'beans')

let x;

//access item by index
x = numbers[2];

//length
x=numbers.length;

//add to the end
food[3] = 'rice';
food[food.length] = 'chicken';

console.log(food);