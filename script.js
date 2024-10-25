const bodyContainer = document.getElementById('body-container');
const mainHeaderContainer = document.getElementById('mainheader-container');
const bookListContainer = document.getElementById('booklist-container');
const bookList = document.getElementById('booklist');
const newBookButtonContainer = document.getElementById('newbookbutton-container');
const newBookButton = document.getElementById('newbook-button');

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; // Boolean value (true or false)
    this.info = function() {
        const readStatus = this.read ? 'Read' : 'Not Read';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;}

    addBookToLibrary(this.info());
}


function addBookToLibrary(bookToAdd) {
    myLibrary.push(bookToAdd);
    displayBook(bookToAdd);
}

const Hobbit = new Book('Hobbit', 'Tolkien', 1000, false);
console.log(Hobbit.info());
console.log(myLibrary);

function displayBook(bookToDisplay) {
    let newBookInList = document.createElement('li');

    newBookInList.textContent = bookToDisplay;
    bookList.appendChild(newBookInList);
}