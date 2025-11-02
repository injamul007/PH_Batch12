import React, { useState } from "react";
import useProducts from "../Hooks/useProducts.jsx";
import ProductCard from "../Components/ProductCard.jsx";
import LoadingSpinner from "../Components/LoadingSpinner.jsx";

const Product = () => {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState(''); 

  const term = search.trim().toLowerCase()

  const searchedProducts = term ? products.filter(product=> product.name.trim().toLowerCase().includes(term)) : products

  return (
    <div>
      <div className="mt-5 flex justify-between">
        <h1 className="text-4xl font-semibold">
          All Products<span>({searchedProducts.length})</span>
        </h1>
        <label className="input">
          <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search Products Here" />
        </label>
      </div>
      {
        loading ? <LoadingSpinner></LoadingSpinner> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      }
    </div>
  );
};

export default Product;
