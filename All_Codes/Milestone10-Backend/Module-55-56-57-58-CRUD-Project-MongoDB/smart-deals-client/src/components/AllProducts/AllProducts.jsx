import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LatestProductCard from '../LatestProductCard/LatestProductCard';


const AllProducts = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      axios.get('http://localhost:3000/products')
    .then(data => {
      setProduct(data.data)
      setLoading(false);
    })
    },1000)
  }, [])

  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>All Products</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
        {
          loading? <div className='flex justify-center items-center min-h-[50vh]'><span className="loading loading-bars loading-xl"></span></div> : 
          product.map(product => <LatestProductCard key={product._id} latestProduct={product}></LatestProductCard>)
        }
      </div>
    </div>
  );
};

export default AllProducts;