function Book(title, author, number, read) {
    this.title = title
    this.author = author
    this.number = number
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${number}, ${read}`;
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet');

console.log(theHobbit.info());