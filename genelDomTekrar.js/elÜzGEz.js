let value;
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardrow;

// child nodes // text dahil
value = todoList.childNodes;
value = todoList.childNodes[0];

// children // sadece elementleri alır

value = todoList.children;
value = todoList.children[3];
value = todoList.children[todoList.children.length - 1];
value = todoList.children[2].textContent = "Değişti";

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Değiştiiiii";

value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;

value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;

value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;
value = todo.previousElementSibling.previousElementSibling; // null değer

console.log(value);
