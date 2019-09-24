console.log("Event Bubbling And Delegation");

// EVENT BUBBLING

function demoBubbling(e) {
  console.log("DemoBubbling", e.type);
}

let taskListTitle = document.querySelector(".card-title");
taskListTitle.addEventListener("click", function(e) {
  console.log("taskListTitle");
});

let cardContent = document.querySelector(".card-content");
cardContent.addEventListener("click", function(e) {
  console.log("cardContent");
});

let divMain = document.querySelector(".card");
divMain.addEventListener("click", function(e) {
  console.log("divMain");
});

let divCol = document.querySelector(".col");
divCol.addEventListener("click", function(e) {
  console.log("divCol");
});

console.log(taskListTitle);

// EVENT DELEGATION

const deleteItem = document.querySelector(".delete-item");
deleteItem.addEventListener("click", function(e) {
  console.log("Delete Item");
  e.preventDefault();
});

console.log(deleteItem);

function delItemDelegationEvent(e) {
  console.log("Delete Item");
  // console.log(e.target);
  if (e.target.className === "fa fa-remove") {
    console.log(e.target.parentElement);
  }
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("Tag a");
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault();
}

const ul = document.querySelector(".collection");
ul.addEventListener("click", delItemDelegationEvent);

console.log(ul);
