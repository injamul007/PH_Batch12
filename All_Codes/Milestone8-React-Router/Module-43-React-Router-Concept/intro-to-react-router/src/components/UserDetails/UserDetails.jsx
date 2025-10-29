import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
  const user = useLoaderData()
  const {name, website} = user

  const {userId} = useParams()
  console.log(userId)

  // const params = useParams()
  // console.log(params)

  return (
    <div>
      <h3>User Details are here</h3>
      <h2>Name: {name}</h2>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails;