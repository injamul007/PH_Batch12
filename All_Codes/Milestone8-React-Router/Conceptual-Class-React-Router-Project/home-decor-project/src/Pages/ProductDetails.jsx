import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts.jsx";
import { updateList } from "../utills/localStorage.js";
import LoadingSpinner from "../Components/LoadingSpinner.jsx";

const ProductDetails = () => {
  const { id } = useParams();

  const { products, loading } = useProducts(); 

  const singleProduct = products?.find((p) => p.id === Number(id));

  if(loading) return <LoadingSpinner></LoadingSpinner>

  const {image, category, price, name, description} = singleProduct || {}

  // const handleAddToWishlist = () => {
  //   const existingList = JSON.parse(localStorage.getItem('wishlist'));

  //   let updatedList = []
  //   if(existingList) {
  //     const isDuplicate = existingList.some(p=> p.id === singleProduct.id)
  //     if(isDuplicate) return alert('this product already ase')
  //     updatedList = [...existingList, singleProduct]
  //   } else {
  //     updatedList.push(singleProduct)
  //   }
    
  //     localStorage.setItem('wishlist', JSON.stringify(updatedList))
  // }

  return (
    <div className="card bg-base-100 border border-gray-200 shadow-sm my-8">
      <figure className="h-78 overflow-hidden">
        <img src={image} className="w-full object-cover" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{category}</p>
        <p>{description}</p>
        <h2>Price: ${price}</h2>
        <div className="card-actions justify-end">
            <button onClick={()=> updateList(singleProduct)} className="btn btn-outline">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 
