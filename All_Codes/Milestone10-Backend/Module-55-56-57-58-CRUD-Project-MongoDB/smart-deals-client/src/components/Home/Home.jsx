import React, { Suspense } from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';

const latestProductsPromise = fetch('http://localhost:3000/latest-products').then(res => res.json())

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div className='flex justify-center items-center min-h-[50vh]'><span className="loading loading-bars loading-xl"></span></div>}>
        <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
      </Suspense>
    </div>
  );
};

export default Home;