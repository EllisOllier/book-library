const myLibrary = [];
const btnNewBook = document.getElementById('new-book');
const btnSubmitForm = document.getElementById('submit')
const dialogElement = document.querySelector('dialog');
const formElement = document.querySelector('form');

window.addEventListener('load', loadLibrary())

btnNewBook.addEventListener('click', function() {
    if(dialogElement.open){
        dialogElement.open = false;
    } else {
        dialogElement.open = true;
        formElement.reset();
    }
})

formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    let book = new Book(document.getElementById('book-title').value, 
    document.getElementById('book-author').value,
    document.getElementById('book-pages').value,
    document.getElementById('book-read').checked);

    addBookToLibrary(book);
    dialogElement.open = false;
})

document.addEventListener('click', function(e){
    if(e.target.id === 'remove-card'){
        removeCard(e);
    } else if(e.target.id === 'read'){
        changeReadStatus(e);
    }
})

function Book(bookTitle, bookAuthor, bookPages, bookRead) {
    this.title = bookTitle;
    this.author = bookAuthor;
    this.pages = bookPages;
    this.read = bookRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    while(document.querySelector('.card')){
        document.querySelector('.card').remove();
    }
    loadLibrary();
}

function displayLibrary() {
    let parent = document.getElementById('library-container');
    for(let i = 0; i < myLibrary.length; i++){
        let card = document.createElement('div');
        card.className = 'card';
        let title = document.createElement('p');
        let author = document.createElement('p');
        let pages = document.createElement('p');
        let read = document.createElement('button');
        let remove = document.createElement('button');
        
        title.textContent = (`${myLibrary[i].title}`);
        author.textContent = (`${myLibrary[i].author}`);
        pages.textContent = (`${myLibrary[i].pages} pages`);
        read.id = "read"
        remove.textContent = "Remove"
        remove.id = 'remove-card';

        if(myLibrary[i].read === true){
            read.style.backgroundColor = 'lightgreen';
            read.textContent = "Read"
        } else {
            read.style.backgroundColor = 'lightcoral';
            read.textContent = "Not Read"
        }

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(remove);

        parent.appendChild(card);
    }
}

function removeCard(e) {
    e.target.parentNode.remove();
    // TODO: Get button parent object and remove from array
}

function changeReadStatus(e) {
    if(e.target.style.backgroundColor === 'lightcoral'){  
        e.target.style.backgroundColor = 'lightgreen';
        e.target.textContent = "Read";
    }else if(e.target.style.backgroundColor === 'lightgreen'){
        e.target.style.backgroundColor = 'lightcoral';
        e.target.textContent = "Not Read";
    }else{
        console.error("Read Status Issue! Ensure colors are correct.")
    }
}

function loadLibrary(){
    if(myLibrary.length > 0){
        displayLibrary();
    }else{
        console.warn("myLibrary is empty")
    }
}