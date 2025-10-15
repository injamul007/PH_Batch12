
import Book from "./Book"
import "./App.css"

export default function Library({books}) {
  return (
    <div className="student">
      <h2>My National Central Library</h2>
      <p>Books Collection: {books.length}</p>
      <p>Adress: </p>
      <ul>
        {
          books.map(book => <Book key={book.id} book={book}></Book>)
        }
      </ul>
    </div>
  )
}