import React, { use } from "react";
import LatestProductCard from "../LatestProductCard/LatestProductCard";

const LatestProducts = ({ latestProductsPromise }) => {
  const latestProducts = use(latestProductsPromise);

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center py-5">Recent <span className="text-primary">Products</span></h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {latestProducts.map((latestProduct) => (
          <LatestProductCard
            key={latestProduct._id}
            latestProduct={latestProduct}
          ></LatestProductCard>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
