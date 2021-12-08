import { ALERT_LIST } from './inputException.js';

const $ = (selector) => document.querySelector(selector);

$('#input-form').addEventListener('submit', (e) => {
  e.preventDefault();
});

const showToDoList = () => {
  const eachToDoList = $('#todo-input').value;
  const toDoListTemplate = (eachToDoList) => `
    <li class="to-do-list-item" style="list-style-type: decimal;">
      <span class="list-name">${eachToDoList}</span>
      <button
        type="button"
        class="list-edit-button"
        >
          edit
        </button>
        <button
          type="button"
          class="list-delete-button"
          style="color:red"
        >
          delete
        </button>
    </li>`;
  $('.to-do-list').insertAdjacentHTML(
    'beforeend',
    toDoListTemplate(eachToDoList),
  );

  $('#todo-input').value = '';
};

const updateToDoList = (e) => {
  const listNameTarget = e.target.closest('li').querySelector('.list-name');
  const updateListName = prompt(
    'Please enter the to do list to be edited',
    listNameTarget.innerText
  );
  listNameTarget.innerText = updateListName;
};

const removeToDoList = (e) => {
  const listNameTarget = e.target.closest('li').querySelector('.list-name');
  if (confirm('Are you sure you want to delete?')) {
    e.target.closest('li').remove();
  }
};

function App() {
  $('#input-button').addEventListener('click', () => {
    if ($('#todo-input').value === '') {
      alert(ALERT_LIST.BLANK);
      return;
    }
    showToDoList();
  });

  $('.to-do-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('list-edit-button')) {
      updateToDoList(e); // 리스트 수정 함수
    }

    if (e.target.classList.contains('list-delete-button')) {
      removeToDoList(e); // 리스트 삭제 함수
    }
  });
}

App();
