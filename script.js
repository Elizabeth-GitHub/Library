const bodyContainer = document.getElementById('body-container');
const mainHeaderContainer = document.getElementById('mainheader-container');
const bookListContainer = document.getElementById('booklist-container');
const bookList = document.getElementById('booklist');
const newBookButtonContainer = document.getElementById('newbookbutton-container');
const newBookButton = document.getElementById('newbook-button');
const dialog = document.getElementById('newbook-dialog');
const submitButton = document.getElementById('submit-button');
const cancelButton = document.getElementById('cancel-button');

const myLibrary = [];

newBookButton.addEventListener('click', () => dialog.showModal());
submitButton.addEventListener('click', getNewBookData);
cancelButton.addEventListener('click', () => dialog.close());


loadLibrary();

function getNewBookData(event) {
    const newBookTitle = document.getElementById('newbook-title').value;
    const newBookAuthor = document.getElementById('newbook-author').value;
    const newBookPages = document.getElementById('newbook-pages').value;
    const newBookIsRead = document.querySelector('input[name="isRead"]:checked').value === "true";

    const newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookIsRead);
}

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead; // Boolean value (true or false)
    this.info = function() {
        const readStatus = this.isRead ? 'Read' : 'Not Read';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;}

    addBookToLibrary(this);
}

function addBookToLibrary(bookToAdd) {
    myLibrary.push(bookToAdd);
    displayBook(bookToAdd);
    saveLibrary();
}

function saveLibrary() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function displayBook(bookToDisplay) {
    let bookContainer = document.createElement('div');
    bookContainer.classList.add('container', 'bookcover-container');

    let newBookInList = document.createElement('li');
    newBookInList.classList.add('book-item'); 

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('container', 'booktitle-container', 'book-title'); 
    titleContainer.textContent = bookToDisplay.title;

    const authorContainer = document.createElement('div');
    authorContainer.classList.add('container', 'bookauthor-container', 'book-author');
    authorContainer.textContent = bookToDisplay.author;

    //const pagesElement = document.createElement('div');
    //agesElement.classList.add('book-pages');
    //pagesElement.textContent = `${bookToDisplay.pages} pages`;

    //const statusElement = document.createElement('div');
    //statusElement.classList.add('read-status');
    //statusElement.textContent = bookToDisplay.isRead ? 'Read' : 'Not Read';

    bookContainer.appendChild(titleContainer);
    bookContainer.appendChild(authorContainer);
    newBookInList.appendChild(bookContainer);
   
    bookList.appendChild(newBookInList);
}

function loadLibrary() {
    const storedLibrary = localStorage.getItem('myLibrary');

    if (storedLibrary) {
        myLibrary.push(...JSON.parse(storedLibrary));
        myLibrary.forEach(displayBook);
    }
}




