
//Primitive types stored on stack
const name = "Oty";
const yearExperience = "5";

let newName = name;
newName = "Henry";
console.log(name, newName);


//Reference types stored on Heap
const person ={
    name: 'Heno',
    exp: 5
}

let newPerson = person;
newPerson.name = "Mambo";

console.log(person, newPerson);