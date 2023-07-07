
bookList=[
  {"name":"A Game of Thrones"},
  {"name":"A Game of Thrones"},
  {"name":"A Game of Thrones"},
  {"name":"A Game of Thrones"},
]



function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  let bookObj = []
  return fetch('https://anapioficeandfire.com/api/books')
    .then(res=>res.json())
    .then( obj =>{
      //console.log(obj)
      bookObj = obj
      console.log (bookObj)
      renderBooks(bookObj)
  })
  //return bookObj
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function processData(){
  bookL= object
  console.log(bookL)
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();

  //renderBooks(bookL)
});
