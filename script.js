// BOOK ARRAY //

let myLibrary = [];

// BOOK CONSTRUCTOR //

class Book {
    constructor(title, author, number, read) {
        this.title = title;
        this.author = author;
        this.number = number;
        this.read = read;
    }
    toggle() {
        if (this.read !== 'read') {
            return this.read = 'read';
        } else {
            return this.read = 'not read';
        }
    }
}

// function Book(title, author, number, read) {
//     this.title = title;
//     this.author = author;
//     this.number = number;
//     this.read = read;
// }

// // PROTOTYPE //

// Book.prototype.toggle = function() {
//     if (this.read !== 'read') {
//         return this.read = 'read';
//     } else {
//         return this.read = 'not read';
//     }
// }

// addBookToLibrary.prototype = Object.create(Book.prototype)
// addBooksToList.prototype = Object.create(Book.prototype)

// BOOK FUNCTION TO ADD BOOK TO ARRAY //

function addBookToLibrary(book) {
        return myLibrary.push(book);
}

// FUNCTION THAT LOOPS THROUGH ARRAY AND ADDS BOOKS TO THE LIST //

let content = document.querySelector(".content");
function addBooksToList() {
        let deleteButton = document.createElement("button");
        let readButton = document.createElement("button");
        let card = document.createElement('div');
        card.textContent = `${myLibrary[myLibrary.length - 1].title} ${myLibrary[myLibrary.length - 1].author} ${myLibrary[myLibrary.length - 1].number} ${myLibrary[myLibrary.length - 1].read}`;
        card.setAttribute("data", `${myLibrary.length - 1}`);
        deleteButton.innerText = "DELETE";
        deleteButton.addEventListener('click', () => {
            myLibrary.splice(card.attributes.data.value, 1);
            content.removeChild(card);
            resetButton();
        });
        readButton.innerText = "READ";
        readButton.addEventListener('click', () => {
            myLibrary[card.attributes.data.value].toggle();
            card.textContent = `${myLibrary[card.attributes.data.value].title} ${myLibrary[card.attributes.data.value].author} ${myLibrary[card.attributes.data.value].number} ${myLibrary[card.attributes.data.value].read}`;
            deleteButton.innerText = "DELETE";
            readButton.innerText = "READ";
            card.appendChild(deleteButton);
            card.appendChild(readButton);
        });
        content.appendChild(card);
        card.appendChild(deleteButton);
        card.appendChild(readButton);
};

// FUNCTION THAT RESETS THE DATA ATTRIBUTES WHEN A BOOK IS REMOVED. //

function resetButton() {
    let reset = document.querySelectorAll('div[data]');
    for (i = 0; i < reset.length; i++) {
        reset[i].setAttribute("data", `${i}`);
    }
}

// ADDS NEW BOOKS TO ARRAY AND TO DISPLAY // 

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

// OPEN FORM //

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}