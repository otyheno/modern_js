
const firstName = "Oty";
const lastName = "Heno";
const age = 89;

// const person={
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
// };

const person={
    firstName,
    lastName,
    age,
};

console.log(person.firstName);


//destructuring
const todo = {
    id: 1,
    title: "Laundry"
}

//const title = todo.title;
const {id, title} = todo;

console.log(id, title);