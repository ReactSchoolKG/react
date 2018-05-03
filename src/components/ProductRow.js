import React from 'react';
import { Button } from 'react-bootstrap';

const ProductRow = ({ productData, handleProductChange }) => (
  <tr>
    <td>{productData.id}</td>
    <td>{!productData.isDeleted ? productData.name : null}</td>
    <td>
      <Button
        bsStyle="danger"
        onClick={() => handleProductChange(productData.id)}
      >
        {!productData.isDeleted ? `delete` : `update` }
      </Button>
    </td>
  </tr>
)

export default ProductRow;
