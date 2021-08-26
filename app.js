const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//listener

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deletecheck);

//function of todo

function addTodo(event) {
  //to stop prevent when we submit
  event.preventDefault();

  //todo lists

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //lists order
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //checked button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class=" fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class=" fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  //to APPEND the list

  todoList.appendChild(todoDiv);

  //to clear todo input after we enter

  todoInput.value = "";
}

function deletecheck(e) {
  const item = e.target;

  //delete

  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  //to check

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
