// BOOK ARRAY //

let myLibrary = [];

// BOOK CONSTRUCTOR //

function Book(title, author, number, read) {
    this.title = title;
    this.author = author;
    this.number = number;
    this.read = read;
}

// PROTOTYPE //

Book.prototype.toggle = function() {
    if (this.read !== 'read') {
        return this.read = 'read';
    } else {
        return this.read = 'not read';
    }
}

addBookToLibrary.prototype = Object.create(Book.prototype)
addBooksToList.prototype = Object.create(Book.prototype)

// BOOK FUNCTION TO ADD BOOK TO ARRAY //

function addBookToLibrary(book) {
    for (let i = 0; i <= myLibrary.length; i++) {
        console.log(book.title);
        console.log(myLibrary[i]);

        // if (book.title === myLibrary[i].title) {
        //     continue;
        // } else {
        //     return myLibrary.push(book);
        // }
    }
}

// ADDED SOME BOOKS FOR TESTING //

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read');
// const greatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '215 pages', 'not read');
// const annaKarenina = new Book('Anna Karenina', 'Leo Tolstoy', '864 pages', 'not read');

// addBookToLibrary(theHobbit);
// addBookToLibrary(greatGatsby);
// addBookToLibrary(annaKarenina);

// FUNCTION THAT LOOPS THROUGH ARRAY AND ADDS BOOKS TO THE LIST //

let content = document.querySelector(".content");
function addBooksToList() {
    // if (myLibrary.length > 3) {
    //     let card = document.createElement('div');
    //     let deleteButton = document.createElement("button");
    //     let readButton = document.createElement("button");
    //     card.textContent = `${myLibrary[myLibrary.length - 1].title} ${myLibrary[myLibrary.length - 1].author} ${myLibrary[myLibrary.length - 1].number} ${myLibrary[myLibrary.length - 1].read}`;
    //     card.setAttribute("data", `${myLibrary.length - 1}`);
    //     deleteButton.innerText = "DELETE";
    //     deleteButton.addEventListener('click', () => {
    //         myLibrary.splice(card.attributes.data.value, 1);
    //         content.removeChild(card);
    //         resetButton();
    //     });
    //     readButton.innerText = "READ";
    //     readButton.addEventListener('click', () => {
    //         myLibrary[myLibrary.length - 1].toggle();
    //         card.textContent = `${myLibrary[myLibrary.length - 1].title} ${myLibrary[myLibrary.length - 1].author} ${myLibrary[myLibrary.length - 1].number} ${myLibrary[myLibrary.length - 1].read}`;
    //         deleteButton.innerText = "DELETE";
    //         readButton.innerText = "READ";
    //         card.appendChild(deleteButton);
    //         card.appendChild(readButton);
    //     });
    //     content.appendChild(card);
    //     card.appendChild(deleteButton);
    //     card.appendChild(readButton);
    // } else {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        let deleteButton = document.createElement("button");
        let readButton = document.createElement("button");
        card.textContent = `${myLibrary[i].title} ${myLibrary[i].author} ${myLibrary[i].number} ${myLibrary[i].read}`;
        card.setAttribute("data", `${i}`);
        deleteButton.innerText = "DELETE";
        deleteButton.addEventListener('click', () => {
            myLibrary.splice(card.attributes.data.value, 1);
            content.removeChild(card);
            resetButton();
        });
        readButton.innerText = "READ";
        readButton.addEventListener('click', () => {
            myLibrary[i].toggle();
            card.textContent = `${myLibrary[i].title} ${myLibrary[i].author} ${myLibrary[i].number} ${myLibrary[i].read}`;
            deleteButton.innerText = "DELETE";
            readButton.innerText = "READ";
            card.appendChild(deleteButton);
            card.appendChild(readButton);
        });
        content.appendChild(card);
        card.appendChild(deleteButton);
        card.appendChild(readButton);
    }
};


addBooksToList()

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