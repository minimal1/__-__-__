/** @format */

const greetingsForm = document.querySelector('.js-greetingsForm'),
  greetingsInput = greetingsForm.querySelector('input'),
  greetings = document.querySelector('.js-greetings');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = greetingsInput.value;
  paintGreetings(currentValue);
  saveName(currentValue);
}

function askForName() {
  greetingsForm.classList.add(SHOWING_CN);
}

function paintGreetings(text) {
  greetingsForm.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerText = `Have a good day, ${text} !`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    askForName();
  } else {
    paintGreetings(currentUser);
  }
}

function init() {
  loadName();
  greetingsForm.addEventListener('submit', handleSubmit);
}

init();
