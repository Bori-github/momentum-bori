const quotes = [
  {
    quote: "It is kind of fun to do the impossible.",
    author: "Walt Disney",
  },
  {
    quote:
      "But I know, somehow, that only when it is dark enough can you see the stars.",
    author: "Martin Luther King, Jr",
  },
  {
    quote: "The way get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Anyone who has never made a mistake has never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote: "Age is no guarantee of maturity.",
    author: "Lawana Blackwell",
  },
  {
    quote: "There is no cure for birth and death, save to enjoy the interval.",
    author: "George Santayana",
  },
  {
    quote: "Science is organized knowledge. Wisdom is organized life.",
    author: "Immanuel Kant",
  },
  {
    quote: "life is not fair get used to it.",
    author: "Bill Gates",
  },
  {
    quote: "Formula for success: rise early, work hard, strike oil",
    author: "J. Paul Getty",
  },
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;
