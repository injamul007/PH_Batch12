import React, { useEffect, useState } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      axios("../furnitureData.json")
        .then((data) => setProducts(data.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    },600)
  }, []);

  return { products, loading, error };
};

export default useProducts;