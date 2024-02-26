console.log("`main.js` is running...");
import { showLibrary } from "./show-library";

//創建一個空的圖書管理系統物件 library。
const library = [];

//創建一個函數 addBook，接受書名、作者、出版年份，並將一本新書添加到圖書管理系統中，預設借閱狀態為「未借出」。
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

//考慮一個簡單的圖書管理系統，每本書有以下屬性：title（書名）、author（作者）、year（出版年份）和 status（借閱狀態）。請創建一系列操作這個圖書管理系統的函數：

function findBook(title) {
  return "";
}

//創建一個函數 borrowBook，接受書名，將該書的借閱狀態設為「已借出」。
function borrowBook(title) {
  const book = "";
}

//創建一個函數 returnBook，接受書名，將該書的借閱狀態設為「未借出」。

//創建一個函數 getAllBooks，返回所有書的陣列。

//創建一個函數 getAvailableBooks，返回所有未借出的書的陣列。

//創建一個函數 getBorrowedBooks，返回所有已借出的書的陣列。

//創建一個函數 searchBooks，接受一個關鍵字，返回包含該關鍵字的所有書的陣列（搜尋書名和作者）。

//創建一個函數 removeBook，接受書名，將該書從圖書管理系統中移除。

//創建一個函數 updateBookStatus，接受書名和新的借閱狀態，將該書的借閱狀態更新為新的狀態。

// 我們開發用的程式碼，能把 `library` 最後的結果顯示在網頁上
showLibrary(library);
