import React, { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const PrivateRoute = ({children}) => {

  const {user, loading} = use(AuthContext)

  if(loading) return <div className='flex justify-center items-center min-h-[50vh]'><span className="loading loading-bars loading-xl"></span></div>

  if(user && user.email) {
    return children;
  }
  return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;