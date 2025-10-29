import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
  const [showInfo, setShowInfo] = useState(false)
  const [visitHome, setVisitHome] = useState(false)
  const location = useLocation()
  console.log(location)
  
  const {id,name,username,email,phone} = user

  const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=> res.json())

  if(visitHome) {
    return <Navigate to={'/'}></Navigate>
  }

  return (
    <div style={{border: '2px solid blue', marginBottom: '16px', borderRadius: '12px'}}>
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p><small>Phone: {phone}</small></p>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button onClick={()=> setShowInfo(!showInfo)}>{showInfo? 'Hide': 'Detail'} Info</button>
      {
        showInfo && <Suspense fallback={<span>Loading...</span>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      }
      <button onClick={()=> setVisitHome(true)}>Visit Home</button>
    </div>
  );
};

export default User;
