import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ BooksData }) => {
  // const [allBooks, setAllBooks] = useState([]);

  // useEffect(()=> {
  //   fetch('booksData.json').then(res=>res.json()).then(data=>console.log(data))
  // },[])

  // const BookPromise = fetch('booksData.json').then(res=> res.json())

  return (
    <div>
      <h1 className="text-4xl text-center p-6">Books</h1>
      <Suspense
        fallback={
          <h1 className="text-center text-4xl">Loading all books...</h1>
        }
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-6">
          {BooksData.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
