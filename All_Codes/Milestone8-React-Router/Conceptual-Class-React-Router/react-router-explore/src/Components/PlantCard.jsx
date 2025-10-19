import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  
  const {id, name, image,price,category } = plant;

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="h-56">
        <img className="w-full h-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div style={{padding:'20px'}}>
        <h2 className="card-title">{name}</h2>
        <h2 className="my-2">Category: {category}</h2>
        <h2>TK: {price} BDT</h2>
        <div className="card-actions justify-end">
          <Link to={`/plant-details/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
