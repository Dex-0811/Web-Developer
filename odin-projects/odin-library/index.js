const myLibrary = [];

function Book(title, author, pages, isRead, genre, year) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.genre = genre;
  this.year = year;
}

function addBookToLibrary(title, author, pages, isRead, genre, year) {
  let book = new Book(title, author, pages, isRead, genre, year);
  myLibrary.push(book);
}

addBookToLibrary(
  'Don Quixote',
  'Miguel Cervantes',
  1056,
  false,
  'Novel',
  '1605'
);

console.log(myLibrary);
