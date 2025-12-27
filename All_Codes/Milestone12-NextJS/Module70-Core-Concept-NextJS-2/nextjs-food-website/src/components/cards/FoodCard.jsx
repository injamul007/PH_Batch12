'use client'

import Link from "next/link";

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category, id } = food;

  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
      
      {/* Image */}
      <div className="h-48 w-full overflow-hidden rounded-t-xl">
        <img
          src={foodImg}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded">
          {category}
        </span>

        <h3 className="text-lg font-semibold text-gray-300 line-clamp-1">
          {title}
        </h3>

        <p className="text-gray-300 font-bold">৳ {price}</p>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <button
            onClick={() => onAddToCart(food)}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 rounded-lg"
          >
            Add to Cart
          </button>

          <Link href={`/foods/${id}`}
            className="flex-1 border border-gray-300 hover:bg-gray-300 hover:text-gray-600 text-sm font-medium text-center py-2 rounded-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
