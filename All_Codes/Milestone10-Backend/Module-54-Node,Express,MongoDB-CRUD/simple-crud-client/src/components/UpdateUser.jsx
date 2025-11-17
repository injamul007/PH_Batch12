import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
  const userDetails = useLoaderData();
  console.log(userDetails)

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value 
    const email = e.target.email.value
    console.log({name,email})
    const updatedUser = {name, email}

    //? send update data to the server
    fetch(`http://localhost:3000/users/${userDetails._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedUser)
    })
    .then(res=> res.json())
    .then(data => {
      console.log('after update', data)
      if(data.modifiedCount) {
        alert('User Info Updated')
      }
    })
  }


  return (
    <div>
      <h2>Update a User</h2>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name='name' defaultValue={userDetails.name} />
        <br />
        <input type="email" name='email' defaultValue={userDetails.email}/>
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;