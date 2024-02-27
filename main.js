console.log("`main.js` is running...");
import { showLibrary } from "../show-library.js";

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

addBook("Harry potter - 1", "JK", 2001);
addBook("Harry potter - 2", "JK", 2002);
addBook("Harry potter - 3", "JK", 2003);
addBook("Harry potter - 4", "JK", 2004);
addBook("Harry potter - 5", "JK", 2004);
addBook("Harry potter - 6", "JK", 2004);
addBook("Harry potter - 6", "jimmy", 2014);

// 避免用 `.find(...)` 用 for 迴圈重寫
function findBook(library, title, author) {
  for (const book of library) {
    console.log(book);
    if (book.title === title && book.author === author) return true;
  }
  return false;
}
console.log(findBook("library", "Harry potter - 1", "JK"));
console.log(findBook("library", "Harry potter", "JK"));

// 用 for loop 重寫
// 創建一個函數 borrowBook，接受書名，將該書的借閱狀態設為「已借出」。
function borrowBook(title, author) {
  const book = findBook(title, author);
  if (book) {
    book.status = "已借出";
    console.log(`Book '${title}' has been borrowed.`);
  } else {
    console.log(`Book '${title}' not found.`);
  }
}

// 創建一個函數 returnBook，接受書名，將該書的借閱狀態設為「未借出」。
// 同上，只不過最後做的事情反過來

// 迴圈
// 創建一個函數 getAvailableBooks，返回所有未借出的書的陣列。

// 同上
// 創建一個函數 getBorrowedBooks，返回所有已借出的書的陣列。

// 實作時，搜尋包含某特定字元即可（例如，書名和作者是否包含 'H')
// 創建一個函數 searchBooks，接受一個關鍵字，返回包含該關鍵字的所有書的陣列（搜尋書名和作者）。

// 我們開發用的程式碼，能把 `library` 最後的結果顯示在網頁上
showLibrary(library);
