import React from "react";
import { Link } from "react-router";

const LatestProductCard = ({ latestProduct }) => {
  const { _id, title, price_min, price_max, image } = latestProduct || {};
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="p-4 h-62">
        <img
          src={image}
          alt="Shoes"
          className="rounded-lg object-cover object-center"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          Price: ${price_min} - ${price_max}
        </p>
        <div className="card-actions">
          <Link to={`/product-details/${_id}`} className="w-full"><button className="btn btn-primary w-full">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default LatestProductCard;
