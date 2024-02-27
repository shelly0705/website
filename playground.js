const nums = [2, 4, 6, 7];

function isOdd(num) {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

function isAnyOdd(nums) {
  for (const num of nums) {
    if (isOdd(num)) {
      return true;
    }
  }
  return false;
}

// const result = isAnyOdd(nums);
// console.log(result);

const books = [
  {
    title: "Harry potter",
    author: "JK",
    year: "2001",
    status: "未出借",
    content: "There is a magic world...",
  },
  {
    title: "Jimmy's story",
    author: "Jimmy",
    year: "2024",
    status: "未出借",
    content: "Jimmy is a boy...",
  },
  {
    title: "The king of the ring",
    author: "Shelly",
    year: "1998",
    status: "未出借",
    content: "There is a great ring...",
  },
];

function hasWantedBook(books, title, author) {
  for (const book of books) {
    if (book.title === title && book.author === author) {
      return true;
    }
  }
  return false;
}

function findWantedBook(books, title, author) {
  for (const book of books) {
    if (book.title === title && book.author === author) {
      return book;
    }
  }
  return null;
}

const hasBook1 = hasWantedBook(books, "Harry potter", "JK");
console.log(`Is there a book - Harry potter? ${hasBook1}`);

const hasBook2 = hasWantedBook(books, "Jimmy's story", "Jimmy");
console.log(`Is there a book - Jimmy's story? ${hasBook2}`);

const hasBook3 = hasWantedBook(books, "The king of the ring", "Shelly");
console.log(`Is there a book - The king of the ring? ${hasBook3}`);

const harryPotter = findWantedBook(books, "Harry potter", "JK");
console.log(
  `What is all about the book - Harry potter? ${harryPotter.content}`
);
