import React from 'react';
import { Link } from 'react-router-dom';
const ProductItem = ({ product, index, toggleRow }) => {
  return (
    <tr>
      <th scope="col">{product.available ? index : false}</th>
      <td>{product.available ? product.name : false}</td>
      <td>
        <button onClick={toggleRow} className="btn btn-primary">
          {product.available ? 'Delete' : 'Restore'}
        </button>
      </td>
      <td>
        <Link className="btn btn-info" to={`/product/${index}`}>
          Get Info
        </Link>
      </td>
    </tr>
  );
};
export default ProductItem;
