
//array of objects
const library = [
    {
        title: "title 1",
        author: "author 1",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },

    {
        title: "title 2",
        author: "author 2",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "title 3",
        author: "author 3",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }

];

//set the values of all read to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

//destructure the title of the first book and rename to first book
library[0].title = "firstBook";

console.log(library[0]);

//destructure variable
const { title: firstBook } = library[0];

console.log(firstBook);

//Turn library object into a JSON string
const lib2 = JSON.stringify(library);

console.log(lib2);