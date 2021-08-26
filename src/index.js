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
        card.classList.add('colour');
        deleteButton.innerText = "DELETE";
        deleteButton.addEventListener('click', () => {
            myLibrary.splice(card.attributes.data.value, 1);
            content.removeChild(card);
            resetButton();
            setStorage();
        });
        readButton.innerText = "READ";
        readButton.addEventListener('click', () => {
            myLibrary[card.attributes.data.value].toggle();
            card.textContent = `${myLibrary[card.attributes.data.value].title} ${myLibrary[card.attributes.data.value].author} ${myLibrary[card.attributes.data.value].number} ${myLibrary[card.attributes.data.value].read}`;
            deleteButton.innerText = "DELETE";
            readButton.innerText = "READ";
            card.appendChild(deleteButton);
            card.appendChild(readButton);
            setStorage();
        });
        content.appendChild(card);
        card.appendChild(deleteButton);
        card.appendChild(readButton);
};

function addStorage() {
    for (let i = 0; i < myLibrary.length; i++) {
        let deleteButton = document.createElement("button");
        let readButton = document.createElement("button");
        let card = document.createElement('div');
        card.textContent = `${myLibrary[i].title} ${myLibrary[i].author} ${myLibrary[i].number} ${myLibrary[i].read}`;
        card.setAttribute("data", `${i}`);
        card.classList.add('colour');
        deleteButton.innerText = "DELETE";
        deleteButton.addEventListener('click', () => {
            myLibrary.splice(card.attributes.data.value, 1);
            content.removeChild(card);
            resetButton();
            setStorage();
        });
        readButton.innerText = "READ";
        readButton.addEventListener('click', () => {
            myLibrary[card.attributes.data.value].toggle();
            card.textContent = `${myLibrary[card.attributes.data.value].title} ${myLibrary[card.attributes.data.value].author} ${myLibrary[card.attributes.data.value].number} ${myLibrary[card.attributes.data.value].read}`;
            deleteButton.innerText = "DELETE";
            readButton.innerText = "READ";
            card.appendChild(deleteButton);
            card.appendChild(readButton);
            setStorage();
        });
        content.appendChild(card);
        card.appendChild(deleteButton);
        card.appendChild(readButton);
    }
}

// FUNCTION THAT RESETS THE DATA ATTRIBUTES WHEN A BOOK IS REMOVED. //

function resetButton() {
    let reset = document.querySelectorAll('div[data]');
    for (let i = 0; i < reset.length; i++) {
        reset[i].setAttribute("data", `${i}`);
    }
}

// ADDS NEW BOOKS TO ARRAY AND TO DISPLAY // 

let booknew = document.querySelector("#new");
let title = document.getElementById('booktitle');
let author = document.getElementById('bookauthor');
let pages = document.getElementById('bookpages');
let error = document.querySelector('.error');

function newBook() {
    if (title.validity.valueMissing || author.validity.valueMissing || pages.validity.valueMissing) {
        error.textContent = "Please make sure you fill in the fields for title, author and pages!";
        return;
    }
        let finalBook = new Book(`${booktitle.value}`, `${bookauthor.value}`, `${bookpages.value}`, `${bookread.value}`);
        addBookToLibrary(finalBook);
        addBooksToList();
        setStorage();
        booktitle.value = '';
        bookauthor.value = '';
        bookpages.value = '';
        bookread.value = '';
        error.textContent = "";
}

booknew.addEventListener('click', newBook);

// OPEN FORM //

function openForm() {
    document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

const bookForm = document.getElementById("open-form");
const closedForm = document.getElementById("closing-form");
bookForm.addEventListener('click', openForm);
closedForm.addEventListener('click', closeForm);

// ADD TO LOCAL STORAGE //

const setStorage = () => {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

const getStorage = () => {
    if (localStorage.myLibrary) {
    let objects = localStorage.getItem('myLibrary');
    objects = JSON.parse(objects);
    for (let i = 0; i < objects.length; i++) {
        objects[i] = new Book(`${objects[i].title}`, `${objects[i].author}`, `${objects[i].number}`, `${objects[i].read}`);
    }
    myLibrary = objects;
    addStorage();
    return objects;
    }
}

getStorage();

// FIREBASE //

// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDRHQktRyEmP_pc-VP2KaHt4Gt82vZdmpk",
//     authDomain: "library-8dcf1.firebaseapp.com",
//     projectId: "library-8dcf1",
//     storageBucket: "library-8dcf1.appspot.com",
//     messagingSenderId: "505827883321",
//     appId: "1:505827883321:web:66ae53b2d1e6f4dbddd0e8",
//     measurementId: "G-TGSPM7R65E"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);