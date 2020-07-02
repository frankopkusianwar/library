const table = document.querySelector('tbody');

let myLibrary = [
  {
    title: 'Harry potter',
    author: 'J.k. Rolings',
    pages: 300,
    read: 'Completed',
  },
  {
    title: 'Harry potter',
    author: 'J.k. Rolings',
    pages: 300,
    read: 'Completed',
  },
  {
    title: 'Harry potter',
    author: 'J.k. Rolings',
    pages: 300,
    read: 'Completed',
  }, {
    title: 'Harry potter',
    author: 'J.k. Rolings',
    pages: 300,
    read: 'Completed',
  }
];


function render() {

  myLibrary.forEach((book, index) => {
    const tableRow = document.createElement('tr');
    const rowIndex = document.createElement('th');
    const rowTitle = document.createElement('td');
    const rowAuthor = document.createElement('td');
    const rowPages = document.createElement('td');
    const RowRead = document.createElement('td');

    rowIndex.textContent = (index + 2);
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
  });

}

render();