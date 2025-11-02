import React from "react";
import { Link } from "react-router";

const ProductCard = ({product}) => {
  
  const {id,image, category, name, price} = product;

  return (
    <div className="card bg-base-100 border border-gray-200 shadow-sm hover:scale-105 transition-all duration-300">
      <figure className="h-48 overflow-hidden">
        <img
          src={image} className="w-full object-cover"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {category}
        </p>
        <h2>
          Price: ${price}
        </h2>
        <div className="card-actions justify-end">
          <Link to={`/product/${id}`}><button className="btn btn-outline">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
