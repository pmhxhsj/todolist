import { ALERT_LIST } from './inputException.js';
import { updateToDoList, removeToDoList } from './listEvent.js';
import { storage } from './localStorage.js';

const $ = (selector) => document.querySelector(selector);

$('#input-form').addEventListener('submit', (e) => {
  e.preventDefault();
});

function App() {
  this.list = [];
  this.init = () => {
    if (storage.getLocalStorage().length > 1) {
      this.list = storage.getLocalStorage();
    }
    render();
  };

  const render = () => {
    const toDoListTemplate = this.list
      .map(
        (ele, idx) => `
    <li data-list-id="${idx}" class="to-do-list-item" style="list-style-type: decimal;">
      <span class="list-name">${ele.name}</span>
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
    </li>`
      )
      .join('');

    $('.to-do-list').innerHTML = toDoListTemplate;
  };
  const showToDoList = () => {
    const eachToDoList = $('#todo-input').value;
    this.list.push({ name: eachToDoList });
    storage.setLocalStorage(this.list);
    render();
    $('#todo-input').value = '';
  };

  $('#input-button').addEventListener('click', () => {
    if ($('#todo-input').value === '') {
      alert(ALERT_LIST.BLANK);
      return;
    }
    showToDoList();
  });

  $('.to-do-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('list-edit-button')) {
      const toDoListId = e.target.closest('li').dataset.listId;
      updateToDoList(e, this.list); // 리스트 수정 함수
    }

    if (e.target.classList.contains('list-delete-button')) {
      const toDoListId = e.target.closest('li').dataset.listId;
      removeToDoList(e, this.list); // 리스트 삭제 함수
    }
  });
}

const app = new App();
app.init();
const a = [1, 2, 3, 4, 5];

const b = a.filter((e) => {
  if (e % 2 === 1) return e;
});

console.log(b);
