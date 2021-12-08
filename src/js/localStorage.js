const storage = {
  setLocalStorage(list) {
    localStorage.setItem('list', JSON.stringify(list));
  },
  getLocalStorage() {
    localStorage.getItem('list');
  },
};

export { storage };
