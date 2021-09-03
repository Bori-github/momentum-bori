const todoBtn = document.getElementById("todo-btn");

const todoContainer = document.querySelector(".todo-container");
const todoEmpty = document.querySelector(".todo-body p");
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-form__new-todo");

let todos = [];

const TODOS_KEY = "todos";

function displayTodoEmpty() {
  if (todos.length === 0) {
    todoEmpty.classList.remove(HIDDEN_CLASSNAME);
  } else {
    todoEmpty.classList.add(HIDDEN_CLASSNAME);
  }
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  displayTodoEmpty();
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();

  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");
  const spanIcon = document.createElement("span");

  li.id = newTodo.id;

  todoList.appendChild(li);
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(spanIcon);

  li.classList.add("todo-list__item");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "todo-list__checkbox");
  span.setAttribute("id", "todo-list__txt");
  spanIcon.classList.add("material-icons-outlined");
  spanIcon.setAttribute("id", "todo-list__delete");
  spanIcon.innerText = "close";

  span.innerText = newTodo.text;
  spanIcon.addEventListener("click", deleteTodo);
}

function addTodo(e) {
  e.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  todos.push(newTodoObj);

  paintTodo(newTodoObj);

  saveTodos();

  todoEmpty.classList.add(HIDDEN_CLASSNAME);
}

todoForm.addEventListener("submit", addTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

displayTodoEmpty();

const slideUp = (target, duration = 500) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.overflow = "hidden";

  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

const slideDown = (target, duration = 500) => {
  todoContainer.classList.remove(HIDDEN_CLASSNAME);

  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") {
    display = "block";
  }
  target.style.display = display;

  let height = target.offsetHeight;
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.overflow = "hidden";
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");

  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

const slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === "none") {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};

todoBtn.addEventListener("click", function () {
  slideToggle(todoContainer, 200);
});
