


const myLibrary = [];

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    document.getElementById("book-card").show();
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let bookName = document.getElementById('book-name').value;
        let bookAuthor = document.getElementById('book-author').value;
        let bookPages = document.getElementById('book-pages').value;
        let bookIsRead = document.getElementById('book-read').value;

        let bookCard = document.createElement('div');
        bookCard.id = 'book-card';
        document.getElementById('library-container').appendChild(bookCard);
        let cardContent = document.createElement('p')
        cardContent.textContent = bookName;
        cardContent.appendChild(bookCard);
    })
}