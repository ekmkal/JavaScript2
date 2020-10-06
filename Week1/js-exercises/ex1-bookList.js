/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

'use strict';

function createBookList(books) {
  // your code goes in here, return the ul element
  // Creating ul element and style it
  const divOfBooks = document.querySelector('#bookList');
  const ulOfBooks = document.createElement('ul');
  ulOfBooks.style.display = 'flex';
  ulOfBooks.style.flexDirection = 'row';
  ulOfBooks.style.listStyle = 'none';

  // Iterating over the books collection, creating li - p - img elements for each book
  for(const book of books) {
    const liOfBook = document.createElement('li');
    liOfBook.style.width = '20rem';
    liOfBook.style.margin = '1rem';
    liOfBook.style.padding = '.5rem';
  
    const pOfBook = document.createElement('p');
    pOfBook.innerHTML = `${book.title} - ${book.author}`;
    liOfBook.appendChild(pOfBook);
  
    const imgOfBook = document.createElement('img');
    imgOfBook.setAttribute("src", book.imgUrl);
    imgOfBook.style.width = '15rem';
    liOfBook.appendChild(imgOfBook);

    // I want to use '===' operator but it doesn't work, don't understand why?
    liOfBook.style.backgroundColor = book.alreadyRead ? 'green' : 'red';

    ulOfBooks.appendChild(liOfBook);
  }

  return ulOfBooks;
}

const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    imgUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442460745l/840._SY475_.jpg'
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    imgUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576609l/12266317.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    imgUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401432508l/4099.jpg',
  }
];

let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);