// your code goes in here
'use strict'

const quotePoint = document.querySelector('#quote');
const authorPoint = document.querySelector('#author');
const newQuoteButton = document.querySelector('.newQuoteButton');

const quotesList = [{
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "J.K. Rowling"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain"
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche"
  }
];

newQuoteButton.addEventListener('click', function(){
    const random = Math.floor(Math.random() * quotesList.length);
    const randomQuote = quotesList[random].quote;
    const randomAuthor = quotesList[random].author;
    quotePoint.textContent = randomQuote;
    authorPoint.textContent = "- " + randomAuthor;
});