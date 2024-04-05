const myLibrary = [];
const btnNewBook = document.getElementById('new-book');
const btnSubmitForm = document.getElementById('submit')
const dialogElement = document.querySelector('dialog');
const formElement = document.querySelector('form');

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
        removeCard();
    } else if(e.target.id === 'read'){
        changeReadStatus(document.getElementById('read'));
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
        
        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = myLibrary[i].pages;
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

function removeCard() {
    let button = document.getElementById('remove-card');
    button.parentNode.remove();
}

function changeReadStatus(button) {
    if(button.style.backgroundColor === 'lightcoral'){  
        button.style.backgroundColor = 'lightgreen';
        button.textContent = "Read";
    }else if(button.style.backgroundColor === 'lightgreen'){
        button.style.backgroundColor = 'lightcoral';
        button.textContent = "Not Read";
    }else{
        console.log("READ STATUS ERROR!")
    }
}