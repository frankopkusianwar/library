const table = document.querySelector('tbody');
const openFormButton = document.querySelector('#open');
const form = document.querySelector('#form');
const deleteBookButton = document.querySelector('td button')

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
    const rowRead = document.createElement('td');
    const rowDelete = document.createElement('td');
    const rowButton = document.createElement('button')

    rowIndex.textContent = (index + 1);
    rowTitle.textContent = book.title;
    rowAuthor.textContent = book.author;
    rowPages.textContent = book.pages;
    rowRead.textContent = book.read;
    rowButton.textContent = 'Delete'


    var newRow = table.appendChild(tableRow);
    newRow.append(rowIndex);
    newRow.append(rowTitle);
    newRow.append(rowAuthor);
    newRow.append(rowPages);
    newRow.append(rowRead);
    rowDelete.append(rowButton);
    newRow.append(rowDelete);
  }

}

openFormButton.addEventListener('click', function toggle() {
  document.querySelector('.center-form').style.display = 'block';
});


function checked(check) {
  return check ? 'Completed' : 'Yet To Read';
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  myLibrary.push(
    {
      title: e.target.title.value,
      author: e.target.author.value,
      pages: e.target.pages.value,
      read: checked(e.target.readStatus.checked),
    }
  )
  
  render();
  e.target.title.value = '';
  e.target.author.value = '';
});
  
  
  