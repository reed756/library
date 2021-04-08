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

/*
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet');
const greatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '215 pages', 'not read yet');
const annaKarenina = new Book('Anna Karenina', 'Leo Tolstoy', '864 pages', 'not read yet');

addBookToLibrary(theHobbit);
addBookToLibrary(greatGatsby);
addBookToLibrary(annaKarenina);
*/

// FUNCTION THAT LOOPS THROUGH ARRAY AND ADDS BOOKS TO THE LIST //

let content = document.querySelector(".content");


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

// NEW BOOK FORM //
let booknew = document.querySelector("#new");
    function newBook() {
        let bookTitle = `${booktitle.value}`;
        let bookAuthor = `${bookauthor.value}`;
        let bookPages = `${bookpages.value}`;
        let bookRead = `${bookread.value}`;
        let finalBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
        addBookToLibrary(finalBook);
        addBooksToList()
        booktitle.value = '';
        bookauthor.value = '';
        bookpages.value = '';
        bookread.value = '';
}

booknew.addEventListener('click', newBook);

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}