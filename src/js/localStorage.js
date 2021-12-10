const storage = {
  setLocalStorage(list) {
    localStorage.setItem('list', JSON.stringify(list));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem('list'));
  },
};

export { storage };
