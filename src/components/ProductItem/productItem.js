import React from 'react';

const ProductItem = ({ product, index, toggleRow }) => {
  return (
    <tr>
      <th scope="col">{product.deleted || index}</th>
      <td>{product.deleted || product.name}</td>
      <td>
        <button onClick={toggleRow} className="btn btn-primary">
          {product.deleted ? 'Restore' : 'Delete'}
        </button>
      </td>
    </tr>
  );
};
export default ProductItem;
