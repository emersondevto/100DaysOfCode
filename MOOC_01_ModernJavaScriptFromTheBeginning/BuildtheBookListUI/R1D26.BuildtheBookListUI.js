console.log("Build the Book List UI ..");

// Book constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor

function UI() {}

// create col

function newColValue(value) {
  const newCol = document.createElement("td");
  typeof value !== "undefined" && newCol.appendChild(document.createTextNode(value));
  return newCol;
}

// Create a prototype add book to list
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");
  // create a table row
  const row = document.createElement("tr");
  // insert columns

  row.appendChild(newColValue(book.title));
  row.appendChild(newColValue(book.author));
  row.appendChild(newColValue(book.isbn));
  const deleteButton = newColValue();
  deleteButton.appendChild(document.createElement("a"));
  deleteButton.firstChild.className = "delete";
  deleteButton.firstChild.appendChild(document.createTextNode("X"));
  row.appendChild(deleteButton);

  list.appendChild(row);

  console.log(row);
};

UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Event liseners
document.getElementById("book-form").addEventListener("submit", function(e) {
  e.preventDefault();
  // Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instanciando un objeto libro
  const book = new Book(title, author, isbn);

  // Instanciando un objeto UI
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book);

  // Clear Fields
  ui.clearFields();

  // console.log(book);
  // console.log(e);
});
