let books = [
    {
        id: 1,
        name: "First book",
    },
];
let nextBookId = 2;

/*
    TODO: The existing code uses functions called `addBook` and `deleteBook`, implement them.
  */

const addBook = () => {
    let name = document.getElementById("newBookName").value.trim();
    // only adds if name is not null or empty.
    if (name) {
        books.push({ id: nextBookId, name });
        nextBookId++;
    }
    clearInputName();
    render();
};

// clears the name input
const clearInputName = () => {
    document.getElementById("newBookName").value = "";
};

const deleteBook = (book) => {
    books.splice(books.indexOf(book), 1);
    render();
};

//...

function render() {
    const container = document.querySelector(".book-list");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    books.forEach((book) => {
        const bookNameElement = document.createElement("span");
        bookNameElement.className = "book-name";
        bookNameElement.innerHTML = book.name;
        bookNameElement.style.margin = "10px";

        const deleteButtonElement = document.createElement("button");
        deleteButtonElement.className = "delete-book btn btn-danger";
        deleteButtonElement.innerHTML = "Delete";
        deleteButtonElement.style.margin = "10px";
        deleteButtonElement.onclick = () => deleteBook(book);

        const bookElement = document.createElement("li");
        bookElement.className = "list-group-book book row";
        bookElement.appendChild(bookNameElement);
        bookElement.appendChild(deleteButtonElement);

        container.appendChild(bookElement);
    });
}

document.querySelector("#addBook").addEventListener("click", addBook);

render();
