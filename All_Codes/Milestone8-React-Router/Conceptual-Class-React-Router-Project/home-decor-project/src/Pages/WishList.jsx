import React, {  useState } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { loadWishlist, removeFromWishlist } from "../utills/localStorage";

const WishList = () => {
  const [wishlist, setWishlist] = useState(()=> loadWishlist());
  const [sortOrder, setSortOrder] = useState("none");

  // useEffect(() => {
  //   const savedList = JSON.parse(localStorage.getItem("wishlist"));
  //   if (savedList) setWishlist(savedList);
  // }, []);

  const sortedItem = (() => {
    if (sortOrder === "price-asc") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  })();

  const handleRemove = (id) => {
    removeFromWishlist(id)
    // for ui instant update
    setWishlist(prev => prev.filter(p => p.id !== id));
  };

  if(!wishlist.length) return <p className="text-3xl">No Data Available</p>

  return (
    <>
      <div className="w-full">
        <div className="mt-5 flex items-center justify-between py-4">
          <h1 className="text-3xl font-semibold">
            Products
            <span className="text-[16px]">
              ({wishlist.length})Product Found
            </span>
          </h1>

          <label className="form-control">
            <select
              className="btn"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by Price</option>
              <option value="price-asc">Low-&gt;High</option>
              <option value="price-desc">High-&gt;Low</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        <div className="space-y-4">
          {sortedItem.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-12 bg-base-100 shadow-sm"
            >
              <figure className="w-[400px] rounded-lg h-48">
                <img
                  src={product.image}
                  className="w-full h-full"
                  alt="Movie"
                />
              </figure>
              <div className="flex flex-col gap-3">
                <h2 className="card-title">{product.name}</h2>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <div className="card-actions">
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="btn btn-outline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* charts */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Wishlist Summary</h3>
        <div className="bg-base-100 border rounded-xl h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={wishlist}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="price"
                fill="#8884d8"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default WishList;
