// BOOK ARRAY //

let myLibrary = [];

// BOOK CONSTRUCTOR //

function Book(title, author, number, read) {
    this.title = title
    this.author = author
    this.number = number
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${number}, ${read}`;
    }
}

// BOOK FUNCTION TO ADD BOOK TO ARRAY //
    function addBookToLibrary(book) {
        myLibrary.push(book.info());
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet');
const greatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '215 pages', 'not read yet');
const annaKarenina = new Book('Anna Karenina', 'Leo Tolstoy', '864 pages', 'not read yet');

addBookToLibrary(theHobbit);
addBookToLibrary(greatGatsby);
addBookToLibrary(annaKarenina);

// FUNCTION THAT LOOPS THROUGH ARRAY AND ADDS BOOKS TO THE LIST //

let content = document.querySelector(".content");
let deleted = document.querySelector("[data]");
function addBooksToList() {
    if (myLibrary.length > 3) {
        let card = document.createElement('div');
        let deleteButton = document.createElement("button");
        card.textContent = `${myLibrary[myLibrary.length - 1]}`;
        card.setAttribute("data", `${myLibrary.length - 1}`);
        deleteButton.innerText = "Delete";
        content.appendChild(card);
        card.appendChild(deleteButton);
    } else {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        let deleteButton = document.createElement("button");
        card.textContent = `${myLibrary[i]}`;
        card.setAttribute("data", `${i}`);
        deleteButton.innerText = "Delete";
        content.appendChild(card);
        card.appendChild(deleteButton);
    }
}
}

addBooksToList()

let booknew = document.querySelector("#new");
    function newBook() {
        let finalBook = new Book(`${booktitle.value}`, `${bookauthor.value}`, `${bookpages.value}`, `${bookread.value}`);
        addBookToLibrary(finalBook);
        addBooksToList();
        booktitle.value = '';
        bookauthor.value = '';
        bookpages.value = '';
        bookread.value = '';
}
booknew.addEventListener('click', newBook);



// let content = document.querySelector(".content");

/*
    function addBooksToList() {
        for (let i = 0; i < myLibrary.length; i++) {
            let card = document.createElement('div');
            let deleteButton = document.createElement("button");
            card.textContent = `${myLibrary[i]}`;
            deleteButton.innerText = "Delete";
            content.appendChild(card);
            card.appendChild(deleteButton);
        }
}
*/
// function addBookToList() {
//             let card = document.createElement('div');
//             let deleteButton = document.createElement("button");
//             card.textContent = `${myLibrary[myLibrary.length - 1]}`;
//             deleteButton.innerText = "Delete";
//             deleteButton.setAttribute("data", `${myLibrary.length - 1}`);
//             content.appendChild(card);
//             card.appendChild(deleteButton);
//         };

// NEW BOOK FORM //

// let booknew = document.querySelector("#new");
//     function newBook() {
//         let finalBook = new Book(`${booktitle.value}`, `${bookauthor.value}`, `${bookpages.value}`, `${bookread.value}`);
//         addBookToLibrary(finalBook);
//         addBookToList();
//         booktitle.value = '';
//         bookauthor.value = '';
//         bookpages.value = '';
//         bookread.value = '';
// }

// booknew.addEventListener('click', newBook);

// DELETE BOOK FROM ARRAY // 

// let deleteButtons = document.querySelector('[data]');
//         function deleteFromList() {
//             console.log('hello');
//             myLibrary.splice(this.data, 1);
//     }

// deleteButtons.addEventListener('click', deleteFromList);
        

// DELETE BOOK FROM LIST //
/*
let deleteButtons = document.querySelectorAll('[data]');
            deleteButtons.forEach((button) => {
                button.addEventListener('click', () => {
                console.log('hello');
                myLibrary.splice(button.data, 1);
            });
        });
*/
// OPEN FORM //

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}