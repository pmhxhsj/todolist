import { storage } from './localStorage.js';

const updateToDoList = (e, input) => {
  const toDoListId = e.target.closest('li').dataset.listId;
  const listNameTarget = e.target.closest('li').querySelector('.list-name');
  const updateListName = prompt(
    'Please enter the to do list to be edited',
    listNameTarget.innerText
  );
  input[toDoListId].name = updateListName;
  storage.setLocalStorage(input);
  listNameTarget.innerText = updateListName;
};

const removeToDoList = (e, input) => {
  if (confirm('Are you sure you want to delete?')) {
    const toDoListId = e.target.closest('li').dataset.listId;
    input.splice(toDoListId, 1);
    storage.setLocalStorage(input);
    e.target.closest('li').remove();
  }
};

export { updateToDoList, removeToDoList };
