import React from 'react';
import { Button } from 'react-bootstrap';

const ProductRow = ({ productData, toggleProduct }) => (
  <tr>
    <td>{productData.id}</td>
    <td>{!productData.isDeleted && productData.name}</td>
    <td>
      <Button
        bsStyle="danger"
        onClick={() => toggleProduct(productData.id)}
      >
        {!productData.isDeleted ? `delete` : `restore` }
      </Button>
    </td>
  </tr>
)

export default ProductRow;
