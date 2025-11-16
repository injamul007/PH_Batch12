import './App.css'
import Users from './components/Users'


const usersPromise = fetch('http://localhost:5000/users').then(res=>res.json())

// console.log(usersPromise)

function App() {

  return (
    <>
      <h1>Users Management</h1>
      <Users usersPromise={usersPromise}></Users>
    </>
  )
}

export default App
