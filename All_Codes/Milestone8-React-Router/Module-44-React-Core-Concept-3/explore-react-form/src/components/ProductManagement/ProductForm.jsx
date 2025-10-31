import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
  const [error, setError] = useState('')

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = (e.target.name.value)
    const price = (e.target.price.value)
    const quantity = (e.target.quantity.value)

    //? validation
    if(name.length === 0) {
      return setError('Please provide a product name')
    } else if (price.length === 0) {
        return setError('Please provide a price')
    } else if (price < 0) {
        return setError('Price cannot be negative')
    } else if (quantity.length === 0) {
        return setError('Please provide a quantity')
    } else if (quantity < 0) {
        return setError('Quantity cannot be negative')
    } else {
      setError('')
    }


    const ProductDetails = {
        name,
        price,
        quantity,
    }

    handleAddProduct(ProductDetails)
  }
  return (
    <div>
      <h3>Add a Product</h3>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name='name' placeholder='Product Name' />
        <br />
        <input type="text" name='price' placeholder='Product Price' />
        <br />
        <input type="text" name='quantity' placeholder='Product Quantity' />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{color: 'red'}}><small>{error}</small></p>
    </div>
  );
};

export default ProductForm;