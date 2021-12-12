let myLibrary = [];
let container = document.querySelector("#container");
let card = document.querySelectorAll(".card");

let theHobbit = new book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");
let ulysses = new book("Ulysses", "James Joyce", "730", "not read yet");
let thereThere = new book("There There", "Tommy Orange", "304", "have read");
let oneHundredYears = new book("One Hundred Years of Solitude", "Gabriel Garcia Marquez", "448", "not read yet");
let theOdyssey = new book("The Odyssey", "Homer", "288", "have read");

// Creates a new book object and adds it to the library array
function book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = title + " by " + author + ", " + pages + " pages, " + status;
    addBookToLibrary(myLibrary,this)
}

// Adds a book object to the library array
function addBookToLibrary(arr, obj) {
    arr.push(obj);
}

// Displays a card for each existing book object in library array
function createCatalogCards() {
    for (let i = 0; i < myLibrary.length; i++) {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = myLibrary[i].info;
        
        let buttonDiv = document.createElement("div");
        buttonDiv.className = "small-buttons";

        let check = document.createElement("img");
        check.src = "images/green-check.png";
        check.className = "check";
        check.setAttribute("height", "15px");
        check.setAttribute("width", "15px");
        check.setAttribute("alt", "Have Read");

        let deletion = document.createElement("img");
        deletion.src = "images/red-x.png";
        deletion.className = "delete";
        deletion.setAttribute("height", "15px");
        deletion.setAttribute("width", "15px");
        deletion.setAttribute("alt", "Delete Book");
        
        div.appendChild(buttonDiv);
        if (myLibrary[i].status == "not read yet") {
            buttonDiv.appendChild(check);
        }
        buttonDiv.appendChild(deletion);
        container.appendChild(div);
    }
}

// Deletes the book card and object from the library array
let deleteButton = document.getElementsByClassName("delete");

function removeBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        deleteButton[i].addEventListener("click", function() {
            myLibrary.splice(i,1);
            container.innerHTML = "";
            createCatalogCards();
            removeBook();
            haveRead();
        })
    }
}

// Removes green check on click to change status to "have read" and remove check
let checkButton = document.getElementsByClassName("check");

function haveRead() {
    for (let i = 0; i < myLibrary.length; i++) {
        checkButton[i].addEventListener("click", function() {
            myLibrary[i].status = "have read";
            container.innerHTML = "";
            createCatalogCards();
            removeBook();
            haveRead();
        })
    }
}

createCatalogCards();
removeBook();
haveRead();