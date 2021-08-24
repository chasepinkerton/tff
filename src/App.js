import './App.css';
import { useState,  useEffect } from 'react';


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "food": "tender"
});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getData();

  async function getData() {
    const response = await fetch("https://www.anapioficeandfire.com/api/books");
    const data = await response.json();

    // store the data into our books variable
    setBooks(data) ;
  }
}, []);


  return (
    <div>
    <h1>Game of Thrones Books</h1>

    {/* display books from the API */}
    {books && (
      <div className="books">

        {/* loop over the books */}
        {books.map((book, index) => (
          <div key={index}>
            <h2>{book.name}</h2>
          </div>
        ))}

      </div>
    )}
  </div>
  );
}

export default App;
