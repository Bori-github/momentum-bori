const introForm = document.getElementById("intro-form");
const introName = document.getElementById("intro__name");

const greeting = document.getElementById("greeting");
const greetingMessage = document.getElementById("greeting-message");
const greetingName = document.getElementById("greeting-name");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function introLogin(e) {
  e.preventDefault();

  introForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);

  const username = introName.value;
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

function greetingMessages(hours) {
  if (hours > 4 && hours < 11) {
    greetingMessage.innerText = "Good morning, ";
  } else if (hours >= 11 && hours < 17) {
    greetingMessage.innerText = "Good afternoon, ";
  } else if (hours >= 17 && hours < 22) {
    greetingMessage.innerText = "Good eveing, ";
  } else {
    greetingMessage.innerText = "Sweet dream, ";
  }
}

function paintGreetings(username) {
  greetingName.innerText = `${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  introForm.classList.remove(HIDDEN_CLASSNAME);
  introForm.addEventListener("submit", introLogin);
} else {
  paintGreetings(savedUsername);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  introForm.classList.add(HIDDEN_CLASSNAME);
}
