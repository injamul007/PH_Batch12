import React from 'react';
import { useState } from 'react';
import { use } from 'react';
import { Link } from 'react-router';

const Users = ({usersPromise}) => {
  const initialData = use(usersPromise);
  const [users, setUsers] = useState(initialData)
  

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const email = e.target.email.value
    console.log({name,email})
    const newUser = {name, email}
    
    //? Save this user data to the database (via server)
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": 'application/json',
      },
      body: JSON.stringify(newUser)
    })
    .then(res=> res.json())
    .then(data => {
      console.log('after post data', data)
      if(data.insertedId) {
        newUser._id = data.insertedId;
        setUsers([...users, newUser]);
        alert('New User added successfully');
        e.target.reset();
      }
    })
  }

  const handleDeleteUser = (id) => {
    console.log('deleting', id)
    
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
    .then(res=>res.json())
    .then(data => {
      console.log('after delete', data)
      if(data.deletedCount) {
        const remainingUsers = [...users].filter(user => user._id !== id)
        console.log(remainingUsers)
        setUsers(remainingUsers);
        alert('Deleted Successfully')
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <button type="submit">Add User</button>
      </form>
      <p>---------------------</p>
      <h2>Number Of Users : {users.length}</h2>
      <div>
        {
          users.map(user => <p key={user._id}>
            {user.name}: {user.email} ---
            <Link to={`/users/${user._id}`}>Details</Link>---
            <Link to={`/update/${user._id}`}>Edit</Link>
            <button onClick={()=>handleDeleteUser(user._id)}>X</button>
            </p>) 
        }
      </div>
    </div>
  );
};

export default Users;