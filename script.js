let myLibrary = [];

function Book(title, author, number, read) {
    this.title = title
    this.author = author
    this.number = number
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${number}, ${read}`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book.info());
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet');
const greatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '215 pages', 'not read yet');
const annaKarenina = new Book('Anna Karenina', 'Leo Tolstoy', '864 pages', 'not read yet');

addBookToLibrary(theHobbit);
addBookToLibrary(greatGatsby);
addBookToLibrary(annaKarenina);

let content = document.querySelector(".content");
let booknew = document.querySelector("#new");

    function addBooksToList() {
        for (let i = 0; i < myLibrary.length; i++) {
            let card = document.createElement('div');
            card.textContent = `${myLibrary[i]}`;
            content.appendChild(card);
        }
}

addBooksToList();