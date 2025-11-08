import './App.css'
import Players from './Players'

const playersPromise = fetch('http://localhost:5000/players').then(res => res.json())

function App() {

  return (
    <>
      <h1>Players info Management</h1>
      <Players playersPromise={playersPromise}></Players>
    </>
  )
}

export default App
