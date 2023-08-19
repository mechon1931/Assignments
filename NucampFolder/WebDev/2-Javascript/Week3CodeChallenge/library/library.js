class Books {
  constructor(title, author, available = true) {
    this.title = title;
    this.author = author;
    this.available = available;
  }
}

const Library =  {
  books: [],

  addBook: function(title, author) {
    const books = new Books(title, author);
    this.books.push(books)
    displayMessage(`Your book ${books.title.toUpperCase()} by ${books.author.toUpperCase()} has been added. You have ${this.books.length} books in your bookshelf.`)
  },
  checkOutBook: function(title) {
    try {
      let found = false;
      for(let book of this.books) {
        if(book.title === title & book.available) {
          found = true;
          book.available = false;
          displayMessage(`Checked Out: ${this.books.title}`);
          break;
        }
      }
      if(!found) throw new Error(`The book: "${title}" was not found or already checked out.`)
    } catch(error) {
      displayError(error.message);
    } 
  },
  getAvailableBooks() {
    let bookList = [];
    for(let book of this.books) {
      if(book.available) {
        bookList.push(book.title);
      }
    }
    displayMessage(`There are ${bookList.length} titles currently on the shelf: ${bookList.join(", \n")}`);
  }
};

function displayMessage(message) {
  const output = document.getElementById('output');
  const p = document.createElement('p');
  p.textContent = message;
  output.appendChild(p);
}

function displayError(message) {
  const output = document.getElementById('output');
  const p = document.createElement('p');
  p.textContent = `Error: ${message}`;
  p.style.color = 'red';
  output.appendChild(p);
}

function addBook() {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value;
  const author = authorInput.value;
  if (title && author) {
    Library.addBook(title, author);
    titleInput.value = '';
    authorInput.value = '';
  } else {
    displayError('Please enter both title and author.');
  }
}

function checkOutBook() {
  const titleInput = document.getElementById('title');
  const title = titleInput.value;
  if (title) {
    Library.checkOutBook(title);
    titleInput.value = '';
  } else {
    displayError('Please enter a title.');
  }
}

function listAvailableBooks() {
  let bookList = [];
  for (let book of Library.books) {
    if (book.available) {
      bookList.push(book.title);
    }
  }
  
  if (bookList.length > 0) {
    displayMessage(`There are ${bookList.length} titles currently on the shelf: ${bookList.join(", ")}`);
  } else {
    displayMessage("There are no available books on the shelf.");
  }
}

const newBooks = 
`[
  {"title": "Eloquent Javascript", "author": "Marijn Haverbeke"},
  {"title": "Javascript: The Good Parts", "author": "Douglas Crockford"},
  {"title": "You Don't Know JS: Scope & Closures", "author": "Kyle Simpson"},
  {"title": "Effective JavaScript: 68 Specific Ways to Harness the Power of Javascript", "author": "David Herman"},
  {"title": "Javascript Patterns", "author": "Stoyan Stefanov"},
  {"title": "Programming Javascript Applications", "author": "Eric Elliott"}
]`;

function receiveBooks(bookData) {
  console.log(`Adding new books to our shelves!`);
  const booksToAdd = JSON.parse(bookData);
  for(let book of booksToAdd) {
    Library.addBook(book.title, book.author);
  }
}

/*
console.log(`There are currently ${Library.books.length} books in the library's database.`);
Library.addBook("Eloquent JavaScript", "Marijn Haverbeke");
receiveBooks(newBooks);
Library.checkOutBook("Eloquent JavaScript");
Library.checkOutBook("Grokking the Coding Interview");
Library.getAvailableBooks();*/
