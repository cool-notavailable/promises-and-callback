const books = [
  {
    title: "Concepts of Physics",
    author: "H. C. Verma",
    year: 1999,
  },
  {
    title: "Who are you?",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
  {
    title: "To Kill a Mocking Bird",
    author: "Harper Lee",
    year: 1960,
  },
];

function logTitles(titles) {
  titles.sort();
  console.log(titles.join(", "));
}

function extractTitles(books, callback) {
  const titles = books.map((book) => book.title);
  callback(titles);
}

extractTitles(books, logTitles);
