/** @format */

const todosForm = document.querySelector('.js-toDosForm'),
  todoInput = todosForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDolist');

let toDos = [];

function getRanInt() {
  return Math.floor(Math.random() * 10000) + 1;
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;

  toDoList.removeChild(li);
  const filteredToDos = toDos.filter(function(toDo) {
    console.log(toDo.id, li.id);
    return toDo.id !== parseInt(li.id);
  });
  console.log(filteredToDos);
  toDos = filteredToDos;
  saveToDos();
}

const TODOS_LS = 'toDos';

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = getRanInt();
  delBtn.innerText = '❌';
  delBtn.addEventListener('click', deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const todoObj = {
    text: text,
    id: newId
  };
  toDos.push(todoObj);
  console.log(toDos);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  paintToDo(todoInput.value);
  todoInput.value = '';
}

function loadTodos() {
  const loadedTodos = localStorage.getItem(TODOS_LS);

  if (loadedTodos !== null) {
    parsedToDos = JSON.parse(loadedTodos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadTodos();
  todosForm.addEventListener('submit', handleSubmit);
}

init();
