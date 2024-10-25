const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; // Boolean value (true or false)
    this.info = function() {
        const readStatus = this.read ? 'Read' : 'Not Read';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;}
}


function addBookToLibrary(bookToAdd) {
    myLibrary.push(bookToAdd);
}