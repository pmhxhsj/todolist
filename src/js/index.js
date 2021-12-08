document.querySelector('#input-form').addEventListener('submit', (e) => {
  e.preventDefault();
});

const showToDoList = () => {
  const $todo = document.querySelector('#todo-input').value;
  const toDoList = document.createElement('div');
  const toDoListContents = document.createTextNode($todo);

  toDoList.appendChild(toDoListContents);
  document.querySelector('#App').appendChild(toDoList);

  document.querySelector('#todo-input').value = '';
};

function App() {
  document.querySelector('#input-button').addEventListener('click', () => {
    showToDoList();
  });
}

App();
