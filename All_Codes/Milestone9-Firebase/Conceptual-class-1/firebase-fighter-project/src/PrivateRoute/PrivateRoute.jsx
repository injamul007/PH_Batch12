import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { DotLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext)
  const location = useLocation()

  if(loading) return <div className='h-[80vh] flex items-center justify-center'>
    <DotLoader color='purple' size={80} />
  </div>

  if(!user) {
    return <Navigate to={'/Signin'} state={location.pathname}></Navigate>
  } 


  return children;
};

export default PrivateRoute;