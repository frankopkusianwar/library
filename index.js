const table = document.querySelector('tbody');
const openFormButton = document.querySelector('#open');
const form = document.querySelector('#form');

let myLibrary = [];

function render() {
  if (myLibrary.length) {
    book = myLibrary[myLibrary.length -1];
    index = myLibrary.length;
    const tableRow = document.createElement('tr');
    const rowIndex = document.createElement('th');
    const rowTitle = document.createElement('td');
    const rowAuthor = document.createElement('td');
    const rowPages = document.createElement('td');
    const RowRead = document.createElement('td');

    rowIndex.textContent = (index + 1);
    rowTitle.textContent = book.title;
    rowAuthor.textContent = book.author;
    rowPages.textContent = book.pages;
    RowRead.textContent = book.read;

    var newRow = table.appendChild(tableRow);
    newRow.append(rowIndex);
    newRow.append(rowTitle);
    newRow.append(rowAuthor);
    newRow.append(rowPages);
    newRow.append(RowRead);
  }

}

openFormButton.addEventListener('click', function toggle() {
  document.querySelector('.center-form').style.display = 'block';
});



  
  
  