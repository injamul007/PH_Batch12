import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Bowlers from './Bowlers'
import Counter from './Counter'
import SetCounter from './SetCounter'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'
import Players from './Players'
import NewCounter from './NewCounter'
import ShowHide from './Show_Hide'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// const fetchFriends = async ()=> {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json()
// }

// const userPosts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }

function App() {
  // const friendsPromise = fetchFriends();

  // function handleClick() {
  //   alert('I am clicked')
  // }
  // const handleClick3 = () => {
  //   alert('clicked me 3')
  // }

  // const handleAdd5 = (num) => {
  //   const add5 = num + 5;
  //   alert(add5);
  // }
  return (
    <>
      <h2>React Core Concept Part 2</h2>
      {/* <ShowHide></ShowHide> */}
      {/* <NewCounter></NewCounter> */}
      {/* <Players></Players> */}
      {/* <Suspense fallback={<h3 className='cards'>Loading all Post...</h3>}>
      <Posts userPosts={userPosts()}></Posts>
      </Suspense> */}
      {/* <Suspense fallback={<h3 className='card'>Loading Friends data...</h3>}>
      <Friends fetchFriends={fetchFriends()}></Friends>
      </Suspense> */}
      {/* <Suspense fallback={<h3 style={{border:'2px solid gold', borderRadius: '10px', padding: '30px',margin: '10px'}}>Loading...</h3>}>
      <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      {/* <SetCounter></SetCounter> */}
      {/* <Bowlers name='Mustafizur'></Bowlers> */}
      {/* <Batsman></Batsman> */}
      {/* <Counter></Counter> */}
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick3}>Click Me3</button>
      <button onClick={()=> alert('clicked 4')}>Click Me4</button>
      <button onClick={()=> handleAdd5(7)}>Click Add 5</button> */}
    </>
  )
}

export default App
