const mainFocusForm = document.getElementById("main-focus__form");
const mainFocusInput = document.getElementById("main-focus__input");
const mainFocusDisplay = document.getElementById("main-focus__display");

let mainFocusList = [];

// const HIDDEN_CLASSNAME = "hidden";
const MAINFOCUS_KEY = "main-focus";

function saveMainFocus() {
  localStorage.setItem(MAINFOCUS_KEY, JSON.stringify(mainFocusList));
}

function deleteMainFocus(e) {
  const div = e.target.parentElement;
  mainFocusList = mainFocusList.filter(
    (mainFocus) => mainFocus.id !== parseInt(div.id)
  );
  div.remove();
  saveMainFocus();

  mainFocusDisplay.classList.add(HIDDEN_CLASSNAME);
  mainFocusForm.classList.remove(HIDDEN_CLASSNAME);
}

function checkdMainFocus() {
  const checkbox = document.getElementById("main-focus__checkbox");

  if (checkbox.checked) {
    checkbox.checked = false;
  } else {
    checkbox.checked = true;
  }
}

function paintMainFocus(newMainFocus) {
  mainFocusDisplay.classList.remove(HIDDEN_CLASSNAME);
  mainFocusForm.classList.add(HIDDEN_CLASSNAME);

  const div = document.createElement("div");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const spanIcon = document.createElement("span");

  div.id = newMainFocus.id;

  mainFocusDisplay.appendChild(div);
  div.appendChild(checkbox);
  div.appendChild(span);
  div.appendChild(spanIcon);

  div.classList.add("main-focus__row");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "main-focus__checkbox");
  span.setAttribute("id", "main-focus__item");
  spanIcon.classList.add("material-icons-outlined");
  spanIcon.setAttribute("id", "main-focus__delete");
  spanIcon.innerText = "close";

  span.innerText = newMainFocus.text;

  span.addEventListener("click", checkdMainFocus);
  spanIcon.addEventListener("click", deleteMainFocus);
}

function submitMainFocus(e) {
  e.preventDefault();

  const newMainFocus = mainFocusInput.value;
  mainFocusInput.value = "";

  const newMainFocusObj = {
    text: newMainFocus,
    id: Date.now(),
  };

  mainFocusList.push(newMainFocusObj);

  paintMainFocus(newMainFocusObj);

  saveMainFocus();
}

mainFocusForm.addEventListener("submit", submitMainFocus);

const savedMainFocus = localStorage.getItem(MAINFOCUS_KEY);

if (savedMainFocus) {
  const parsedMainFocus = JSON.parse(savedMainFocus);
  mainFocusList = parsedMainFocus;
  parsedMainFocus.forEach(paintMainFocus);
}
