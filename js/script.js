


const myLibrary = [];

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    document.getElementById("dialog-book").show();
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
        if(book.isRead){
            readStatus.textContent = ("Status: Read")
        } else {
            readStatus.textContent = ("Status: Not read")
        }
        bookTitle.textContent = book.name;
        authorTitle.textContent =  ("by " + book.author);
        bookPages.textContent = ("Pages: " + book.pages);
        bookCard.id = "book-card";
        
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(authorTitle);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(readStatus);
        libraryContianer.appendChild(bookCard);
        
        
    })
}