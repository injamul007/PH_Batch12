import React from 'react';

const ProductTable = ({products}) => {
  // console.log(products)
  return (
    <div>
      <h2>Product: {products.length}</h2>
      
      <table style={{border: '1px solid black'}}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, index) => <tr key={index}>
            <td>{index+1}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td></td>
          </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;