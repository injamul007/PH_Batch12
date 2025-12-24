import React from 'react';

const AuthLayout = ({children}) => {
  return (
    <div>
      <div className='flex gap-4'>
        <div className='flex-2'>{children}</div>
        <div className='flex-1 bg-amber-200 min-h-screen text-black text-4xl justify-center items-center flex'>
          Welcome To Authentication
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;