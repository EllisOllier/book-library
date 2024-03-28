const dialogBox = document.getElementById("dialog-book");

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function showForm() {
    document.getElementById('book-name').value = "",
    document.getElementById('book-author').value = "", 
    document.getElementById('book-pages').value = "", 
    document.getElementById('book-read').checked = false
    dialogBox.show();
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let book = new Book(
    document.getElementById('book-name').value,
    document.getElementById('book-author').value, 
    document.getElementById('book-pages').value, 
    document.getElementById('book-read').checked
    )
    
    let bookCard = document.createElement("div");
    let libraryContianer = document.getElementById('library-container');
    let bookTitle = document.createElement('h3');
    let authorTitle = document.createElement('h4');
    let bookPages = document.createElement('p');
    let readStatus = document.createElement('p');
    let removeBook = document.createElement('button');

    if(book.isRead){
        let status = document.createElement('span');
        status.textContent = "Read";
        status.style.color = "green";
        status.id = "read-status";
        readStatus.textContent = ("Status: ");
        readStatus.appendChild(status);
    } else {
        let status = document.createElement('span');
        status.textContent = "Not read"
        status.style.color = "red"
        status.id = "read-status";
        readStatus.textContent = ("Status: ");
        readStatus.appendChild(status);
    }
    bookTitle.textContent = book.name;
    authorTitle.textContent =  ("by " + book.author);
    bookPages.textContent = ("Pages: " + book.pages);
    bookCard.id = "book-card";
    removeBook.id = "remove-book";
    removeBook.textContent = "Remove"
    
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(authorTitle);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(readStatus);
    bookCard.appendChild(removeBook);
    libraryContianer.appendChild(bookCard);


    dialogBox.close();
    
    removeBook.addEventListener('mousedown', (e) => {
        while(bookCard.lastElementChild){
            bookCard.removeChild(bookCard.lastElementChild);
            bookCard.remove();
        }
    })

    readStatus.addEventListener('mousedown', (e) => {
        
        if(book.isRead){
            e.target.textContent = "Not read";
            e.target.style.color = "red";
            book.isRead = false;
        } else {
            e.target.textContent = "Read";
            e.target.style.color = "green";
            book.isRead = true;
        }
    })
})