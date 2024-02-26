function createDiv(content) {
  const div = document.createElement("div");
  div.textContent = content;
  return div;
}

export function showLibrary(library) {
  const libraryDiv = document.querySelector("#library");

  for (const book of library) {
    const content = `${book.author} - ${book.title} - ${book.year} - ${book.status}`;
    const div = createDiv(content);
    libraryDiv.appendChild(div);
  }
}
