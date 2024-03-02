console.log("`main.js` is running...");
import { showLibrary } from "./show-library.js";

// 創建一個空的圖書管理系統物件 library。
const library = [];

// 創建一個函數 addBook，接受書名、作者、出版年份，並將一本新書添加到圖書管理系統中，預設借閱狀態為「未借出」。
function addBook(title, author, year) {
  const newBook = {
    title,
    author,
    year,
    status: "未出借",
  };
  library.push(newBook);
}

addBook("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 2001);
addBook("Harry Potter and the Chamber of Secrets", "J. K. Rowling", 2002);
addBook("Harry Potter And The Prisoner of Azkaba", "J. K. Rowling", 2003);
addBook("Harry Potter and The Goblet of Fire", "J. K. Rowling", 2004);
addBook("Harry Potter and the Order of the Phoenix", "J. K. Rowling", 2005);
addBook("Harry Potter and the Half-Blood Prince", "J. K. Rowling", 2006);
addBook("Harry Potter and the Deathly Hallows", "J. K. Rowling", 2006);

// 避免用 `.find(...)` 用 for 迴圈重寫
function findBook(library, title, author) {
  for (const book of library) {
    if (book.title === title && book.author === author) {
      return book;
    }
  }
  return null;
}

console.log(
  findBook(library, "Harry Potter and the Philosopher's Stone", "J. K. Rowling")
);
// 用 for loop 重寫
// 創建一個函數 borrowBook，接受書名，將該書的借閱狀態設為「已借出」。
function borrowBook(library, title, author) {
  const book = findBook(library, title, author);
  if (book) {
    if (book.status === "未出借") {
      console.log("本書可出借");
      book.status = "已出借";
    } else {
      console.log("本書出借中，目前無法出借");
    }
  } else {
    console.log("本館無此書");
  }
}
borrowBook(
  library,
  "Harry Potter and the Philosopher's Stone",
  "J. K. Rowling"
);
borrowBook(library, "Harry Potter and the Chamber of Secrets", "J. K. Rowling");
borrowBook(library, "Harry Potter And The Prisoner of Azkaba", "J. K. Rowling");

// 創建一個函數 returnBook，接受書名，將該書的借閱狀態設為「未借出」。
function returnBook(library, title, author) {
  const book = findBook(library, title, author);
  if (book) {
    if (book.status === "已出借") {
      console.log("本書已歸還");
      book.status = "未出借";
    } else {
      console.log("本書尚未出借");
    }
  } else {
    console.log("本館無此書");
  }
}
returnBook(
  library,
  "Harry Potter and the Philosopher's Stone",
  "J. K. Rowling"
);
returnBook(library, "Harry Potter and the Chamber of Secrets", "J. K. Rowling");
returnBook(library, "Harry potter - 10", "J. K. Rowling");

// 迴圈
// 創建一個函數 getAvailableBooks，返回所有未借出的書的陣列。
function getAvailableBooks(library) {
  const status = [];
  for (const book of library) {
    if (book.status === "未出借") {
      status.push(book);
    }
  }
  return status;
}
console.log(getAvailableBooks(library));

// 創建一個函數 getBorrowedBooks，返回所有已借出的書的陣列。
function getBorrowedBooks(library) {
  const status = [];
  for (const book of library) {
    if (book.status === "已出借") {
      status.push(book);
    }
  }
  return status;
}
console.log(getBorrowedBooks(library));

// 實作時，搜尋包含某特定字元即可（例如，書名和作者是否包含 'H')
/*function searchBooks(library, keyword) {
  const matchingBooks = [];

  for (const book of library) {
    if (book.title.includes(keyword) || book.author.includes(keyword)) {
      matchingBooks.push(book);
    }
  }

  return matchingBooks;
}
const result = searchBooks(library, 'H');
console.log(result); */

function isMatched(book, keyword) {
  for (const char of book.title) {
    if (char === keyword) {
      return true;
    }
  }

  for (const char of book.author) {
    if (char === keyword) {
      return true;
    }
  }

  return false;
}

function searchBooks(library, keyword) {
  const matchingBooks = [];

  for (const book of library) {
    // 針對目前的簡單情況，其實可以這樣化簡
    // const wholeString = book.title + book.author;

    // for (const char of wholeString) {
    //   if (char === keyword) {
    //     matchingBooks.push(book);
    //     break;
    //   }
    // }
    // 比較泛用的化簡方式 - 另外寫一個小的函數
    if (isMatched(book, keyword)) {
      matchingBooks.push(book);
    }
  }
  return matchingBooks;
}
const result = searchBooks(library, "o");
console.log(result);

const result2 = searchBooks(library, "G");
console.log(result2);

//我們開發用的程式碼，能把 `library` 最後的結果顯示在網頁上
showLibrary(library);
