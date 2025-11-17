import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetail = () => {
  const idDetails = useLoaderData()
  console.log(idDetails)
  
  return (
    <div>
      <h3>User Details</h3>
    </div>
  );
};

export default UserDetail;