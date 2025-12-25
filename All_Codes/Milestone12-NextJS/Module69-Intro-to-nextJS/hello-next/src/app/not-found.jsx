import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <h2>404 || Not Found</h2>
      <h4>The page you are looking for is not found</h4>
      <Link href={'/'} className='bg-sky-400 px-4 py-2'>Go to Home</Link>
    </div>
  );
};

export default NotFound;