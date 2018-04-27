import React from 'react';

const ProductItem = ({ product, index, deleteRow }) => {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{product}</td>
      <td>
        <button className="btn btn-primary" onClick={deleteRow}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
