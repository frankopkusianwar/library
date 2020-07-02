const table = document.querySelector('tbody');
const openFormButton = document.querySelector('#open');
const form = document.querySelector('#form');
const formToggle = document.querySelector('#center-form');

const myLibrary = [];

function render() {
  if (myLibrary.length) {
    const book = myLibrary[myLibrary.length - 1];
    const index = myLibrary.length;
    const tableRow = document.createElement('tr');
    const rowIndex = document.createElement('th');
    const rowTitle = document.createElement('td');
    const rowAuthor = document.createElement('td');
    const rowPages = document.createElement('td');
    const rowRead = document.createElement('td');
    const rowDelete = document.createElement('td');
    const rowButton = document.createElement('button');
    const rowReadButton = document.createElement('button');

    rowIndex.textContent = (index + 1);
    rowTitle.textContent = book.title;
    rowAuthor.textContent = book.author;
    rowPages.textContent = book.pages;
    rowButton.textContent = 'Delete';
    rowReadButton.textContent = book.read;
    rowReadButton.className = 'read';
    rowButton.className = 'delete';

    const newRow = table.appendChild(tableRow);
    newRow.append(rowIndex);
    newRow.append(rowTitle);
    newRow.append(rowAuthor);
    newRow.append(rowPages);
    rowRead.append(rowReadButton);
    newRow.append(rowRead);
    rowDelete.append(rowButton);
    newRow.append(rowDelete);
  }
}

function toggle() {
  formToggle.classList.toggle('form-toggle');
}

function openForm() {
  openFormButton.addEventListener('click', toggle);
}

openForm();

function checked(check) {
  return check ? 'Completed' : 'Yet To Read';
}

function deleteBook(e) {
  e.target.parentNode.parentNode.remove();
}

function deleteBookRow() {
  document.querySelectorAll('.delete').forEach((button) => {
    button.addEventListener('click', deleteBook);
  });
}

function readStatus(e) {
  e.target.textContent === 'Completed' ? e.target.textContent = 'Yet To Read' : e.target.textContent = 'Completed'; // eslint-disable-line no-unused-expressions
}

function readBookStatus() {
  document.querySelectorAll('.read').forEach((button) => {
    button.addEventListener('click', readStatus);
  });
}

function addBookToLibrary(e) {
  e.preventDefault();
  if (e.target.title.value.length > 1 && e.target.author.value.length > 1
    && e.target.pages.value.length > 1) {
    myLibrary.push(
      {
        title: e.target.title.value,
        author: e.target.author.value,
        pages: e.target.pages.value,
        read: checked(e.target.readStatus.checked),
      },
    );

    render();
    e.target.title.value = '';
    e.target.author.value = '';
    e.target.pages.value = '';
    e.target.readStatus.checked = '';
    deleteBookRow();
    readBookStatus();
    toggle();
  } else {
    alert('Please fill all the fields'); // eslint-disable-line no-alert
  }
}

form.addEventListener('submit', addBookToLibrary);
