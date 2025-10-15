import "./App.css"

export default function Book({book}) {
  const {name, price} = book
  return <li className="student">Name: {name}, Price: {price}</li>
}

