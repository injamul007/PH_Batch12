import Users from "./Components/Users"
// import User from "./Components/User";
import { Suspense, useEffect, useState } from "react";
// import Spinner from "./Components/Spinner";
// import { useState } from "react";


function App() {
  // const person = {
  //   name: 'Boss',
  //   age: 30,
  //   work: 'good work',
  // }

  // const student = {
  //   name: 'jodu',
  //   age: 14,
  //   isRegular: true,
  // }
  // const user = {
  //   name: 'jodu-modu',
  //   role: 'admin'
  // }
  // const handleLogin=(value)=>{
  //   let count = 0;
  //   count = count + value
  //   // return <h2>{count}</h2>
  //   console.log(count)
  // }
  // function handleLogin(value) {
  //   let count = 0
  //   count = count + value
  //   console.log(count)
  // }

  // const [count, setCount] = useState(0)

  // const fetchUrl = 'https://fake-json-api.mock.beeceptor.com/users';
  
  // const userPromise = fetch(fetchUrl).then(res => res.json())

  // const userPromiseFunc = async () => {
  //   const res = await fetch('https://fake-json-api.mock.beeceptor.com/users');

  //   return res.json();
  // }

  // console.log(userPromise)
  // const userPromise = userPromiseFunc();

  const [users, setUsers] = useState([])

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> setUsers(data))
  },[])
  
  return (
    <> 
    <h1 className="text-2xl">Hello From React JS</h1>
    <h1>Users All Data: {users.length}</h1>
    {/* <Suspense fallback={<h1>Data Loading...</h1>}>
    <Users userPromise={userPromiseFunc()}></Users>
    </Suspense> */}
    {/* <Users userPromise={userPromise}></Users> */}
    {/* <Suspense fallback={<Spinner></Spinner>}>
      <Users userPromise={userPromise}></Users>
    </Suspense> */}
    {/* <button onClick={()=>handleLogin(4)}>Login</button> */}
    {/* <button style={{fontSize:'24px',padding:'10px 20px'}} onClick={()=>setCount(count+1)}>Count {count}</button> */}
    {/* <h2>{student.name}</h2>
    <h2>{student.age}</h2>
    <h3>{student.isRegular? "Regular": "Irregular"}</h3> */}
    {/* <User user={user}></User> */}
      {/* <h1>Hello World {person.name} {person.age}</h1> */}
      {/* <Users info={person}></Users>
      <User></User> */}
    </>
  )
}

export default App;