import React from "react";
import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts.jsx";
import LoadingSpinner from "../Components/LoadingSpinner.jsx";

const Home = () => {
  const {products, loading} = useProducts()

  const featureProducts = products.slice(0,6)

  return (
    <div>
      <div className="mt-5 flex justify-between">
        <h1 className="text-4xl font-semibold">Featured Products</h1>
        <Link className="btn btn-outline" to='/products'>See All Products</Link>
      </div>
      {
        loading? <LoadingSpinner></LoadingSpinner> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        {featureProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      }
    </div>
  );
};

export default Home;
